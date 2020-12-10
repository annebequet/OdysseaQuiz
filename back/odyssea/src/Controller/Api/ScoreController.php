<?php

namespace App\Controller\Api;

use App\Entity\Score;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ScoreController extends AbstractController
{
    /**
     * Add or Edit Score
     *
     * @Route("/api/score/{environmentId<\d+>}", name="api_scores_add", methods={"POST"})
    */
    public function addScore(EntityManagerInterface $em, SerializerInterface $serializer, ScoreRepository $scoreRepository, Request $request, ValidatorInterface $validator, $environmentId)
    {
        // Get the content of the request
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }

        // Get the Score data
        $scoreArray['user'] = $parametersAsArray['user'];
        $scoreArray['environment'] = $environmentId;
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
        
        // If there is no Score for this User/Environement/Category combination
        if (empty($scoreLine)) { 

            // The User played for the first time, initialize the data
            $score->setQuizNb(1);
            $score->setScore(($score->getPoints())*10);
            $score->setSession(0);

            // Persist the new Score to the database
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($score);
            $entityManager->flush();

        } else {         
            // If there is already a Score, calculate the new totals
            $points = ($scoreLine->getPoints()) + ($score->getPoints());
            $quizNb = ($scoreLine->getQuizNb()) + 1;
            $scoreTotal = ($points/$quizNb)*10;

            // If the session number is 9, go back to 0
            if ($scoreLine->getSession() === 9) {
                $session = 0;
            }
            // If not go to the next one
            else {
                $session = $scoreLine->getSession() + 1;
            }

            // Set and update the Score 
            $scoreLine->setPoints($points);
            $scoreLine->setQuizNb($quizNb);
            $scoreLine->setScore($scoreTotal);
            $scoreLine->setSession($session);
            $scoreLine->setUpdatedAt(new \DateTime());
            $em->flush();
        }

        // After processing the score, forward the request to the appropriate function to handle the update of the grades
        if ($environmentId == 1) {
            return $this->redirectToRoute('api_questions_update_grade', [
                'request' => $request
            ], 307);
        }
        if ($environmentId == 2) {
            return $this->redirectToRoute('api_questions_image_update_grade', [
                'request' => $request
            ], 307);
        }
    }
}
