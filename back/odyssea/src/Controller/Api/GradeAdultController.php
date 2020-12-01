<?php

namespace App\Controller\Api;

use App\Entity\GradeAdult;
use App\Repository\GradeAdultRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeAdultController extends AbstractController
{
    /**
     * Get one grade for an user in the adult environment
     *
     * @Route("/api/grade/{id<\d+>}", name="api_grades_get_one", methods={"GET"})
     */
    public function getOne(GradeAdultRepository $gradeAdultRepository, GradeAdult $gradeAdult)
    {
        $grade = $gradeAdultRepository->find($gradeAdult);
        //dump($grade);

        // Check if the Grade exists, if not, return 404
        if ($grade === null) {
            return $this->json(['error' => 'Grade non trouvée'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($grade, 200, [], ['groups' => 'grades_get_one']);
    }

    /**
     * Update grade of question
     * @Route("/api/results/adult", name="api_questions_update_grade", methods={"POST"})
     */
    public function updateGrade(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, GradeAdultRepository $gradeAdultRepository)
    {
        $user = $this->getUser();
        
        // Get the content of the request
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }

        for ($i=0; $i < count($parametersAsArray); $i++) {
            $grade1 = $serializer->serialize($parametersAsArray[$i], 'json');
            $grade = $serializer->deserialize($grade1, GradeAdult::class, 'json');
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

            $gradeLine = $gradeAdultRepository->findOneBy([
                'user' => $user,
                'question' => $grade->getQuestion()
            ]);
            
            $answer = $parametersAsArray[$i]['answer'];

            $grade = $gradeLine->getGrade();

            // Change the grade of the question according to the answer
            if ($grade == 0 && $answer == false) {
                $gradeLine->setGrade(0);
            }
            if ($grade > 0 && $answer == false) {
                $gradeLine->setGrade($grade -1);
            }
            if ($grade < 5 && $answer == true) {
                $gradeLine->setGrade($grade +1);
            }
            if ($grade == 5 && $answer == true) {
                $gradeLine->setGrade(5);
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
