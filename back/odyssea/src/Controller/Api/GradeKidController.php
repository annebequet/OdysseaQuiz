<?php

namespace App\Controller\Api;

use App\Entity\GradeKid;
use App\Repository\GradeKidRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeKidController extends AbstractController
{
    /**
     * Update grade of question image
     * @Route("/api/results/kid", name="api_questions_image_update_grade", methods={"POST"})
     */
    public function updateGrade(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, GradeKidRepository $gradeKidRepository)
    {
        $user = $this->getUser();
        
        // Get the content of the request
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }

        for ($i=0; $i < count($parametersAsArray); $i++) {
            $grade1 = $serializer->serialize($parametersAsArray[$i], 'json');
            $grade = $serializer->deserialize($grade1, GradeKid::class, 'json');
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

            $gradeLine = $gradeKidRepository->findOneBy([
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
