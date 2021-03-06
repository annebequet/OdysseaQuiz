<?php

namespace App\Controller\Api;

use App\Entity\Score;
use App\Entity\GradeAdult;
use App\Repository\UserRepository;
use App\Repository\GradeAdultRepository;
use App\Repository\ScoreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeAdultController extends AbstractController
{
    /**
     * Update Grade of Question
     * 
     * @Route("/api/results/adult", name="api_questions_update_grade", methods={"POST"})
     */
    public function updateGrade(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, GradeAdultRepository $gradeAdultRepository, UserRepository $userRepository, ScoreRepository $scoreRepository)
    {
        // Get the content of the request
        $parametersAsArray = [];
        
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
            $answers = $parametersAsArray['answers'];
            $user = $userRepository->find($parametersAsArray['user']);
        }

        // Get the Score data
        $scoreArray['user'] = $parametersAsArray['user'];
        $scoreArray['environment'] = $parametersAsArray['environmentId'];
        $scoreArray['points'] = $parametersAsArray['points'];
        $scoreArray['category'] = $parametersAsArray['categoryId'];

        // Serialize the Array content into Json
        $scoreJson = $serializer->serialize($scoreArray, 'json');
        // Deserialiaze the Json content into a Score entity
        $score = $serializer->deserialize($scoreJson, Score::class, 'json');
        
        // Validate the entity with the validator service
        $errors = $validator->validate($score);

        // If there are errors, return the array in JSON format
        if(count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Get the Score corresponding to the User/Environment/Category combination
        $scoreLine = $scoreRepository->findOneBy([
            'user' => $score->getUser(),
            'category' => $score->getCategory(),
            'environment' => $score->getEnvironment()
        ]);

        // For each answers
        for ($i=0; $i < count($answers); $i++) {
            // Serialize the Array content into Json
            $gradeJson = $serializer->serialize($answers[$i], 'json');
            // Deserialiaze the Json content into a GradeAdult entity
            $grade = $serializer->deserialize($gradeJson, GradeAdult::class, 'json');
            // Set the current User to the GradeAdult entity
            $grade->setUser($user);

            // Validate the entity with the validator service
            $errors = $validator->validate($grade);

            // If there are errors, return the array in JSON format
            if (count($errors) > 0) {
                $errorsArray = [];
                foreach ($errors as $error) {
                    $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
                }
                return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            // Get the GradeAdult corresponding to the User/Question combination
            $gradeLine = $gradeAdultRepository->findOneBy([
                'user' => $user,
                'question' => $grade->getQuestion()
            ]);
            
            // Get the value of the answer, grade and session
            $answer = $answers[$i]['answer'];
            $grade = $gradeLine->getGrade();
            $session = $scoreLine->getSession();

            // Update the grade of the Question and assign a deck if necessary
            // If the Question comes from the current pool (level 1)
            if ($grade == 1 && $answer == true) {
                if ($session == 0) {
                    $gradeLine->setDeck([0, 2, 5, 9]);
                }
                if ($session == 1) {
                    $gradeLine->setDeck([1, 3, 6, 0]);
                }
                if ($session == 2) {
                    $gradeLine->setDeck([2, 4, 7, 1]);
                }
                if ($session == 3) {
                    $gradeLine->setDeck([3, 5, 8, 2]);
                }
                if ($session == 4) {
                    $gradeLine->setDeck([4, 6, 9 , 3]);
                }
                if ($session == 5) {
                    $gradeLine->setDeck([5, 7, 0, 4]);
                }
                if ($session == 6) {
                    $gradeLine->setDeck([6, 8, 1, 5]);
                }
                if ($session == 7) {
                    $gradeLine->setDeck([7, 9, 2, 6]);
                }
                if ($session == 8) {
                    $gradeLine->setDeck([8, 0, 3, 7]);
                }
                if ($session == 9) {
                    $gradeLine->setDeck([9, 1, 4, 8]);
                }
                $gradeLine->setGrade(2);
            }
            if ($grade == 2 && $answer == true) {
                $gradeLine->setGrade(3);
            }
            if ($grade == 3 && $answer == true) {
                $gradeLine->setGrade(4);
            }
            if ($grade == 2 && $answer == false) {
                $gradeLine->setGrade(1);
                $gradeLine->setDeck(null);
            }
            if ($grade == 3 && $answer == false) {
                $gradeLine->setGrade(1);
                $gradeLine->setDeck(null);
            }
            if ($grade == 4 && $answer == false) {
                $gradeLine->setGrade(1);
                $gradeLine->setDeck(null);
            }
            if ($grade == 4 && $answer == true) {
                $gradeLine->setGrade($grade + 1);
                $gradeLine->setDeck(null);
            }

            // Set the new updatedAt datetime
            $em = $gradeLine->setUpdatedAt(new \DateTime());
            // Save and flush
            $em = $this->getDoctrine()->getManager();
            $em->flush();
        }
        return $this->json(['message' => 'Grades modifiées.'], Response::HTTP_OK);
    }
}
