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
     * @Route("/api/score", name="api_add_score", methods={"POST"})
    */
    public function addScore(EntityManagerInterface $em, SerializerInterface $serializer, ScoreRepository $scoreRepository, Request $request, ValidatorInterface $validator)
    {
        // Get the content of the request
        $content = $request->getContent();

        // Deserialiaze the json content into a Score entity
        $score = $serializer->deserialize($content, Score::class, 'json');

        //dd($score);
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

        $scoreLine = $scoreRepository->findOneBy([
            'user' => $score->getUser(),
            'category' => $score->getCategory(),
            'environment' => $score->getEnvironment()
        ]);
        
        // if there's no score for this user/category/environement yet 
        if (empty($scoreLine)) { 
            // The user played for the first time
            $score->setQuizNb(1);
            $score->setScore(($score->getPoints())*10);
            // Add the new score to the database
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($score);
            $entityManager->flush();
            return $this->json(['message' => 'Score ajouté'], Response::HTTP_CREATED);

        } else {
                   
            // if there's already a score, calculate the new totals
            $points = ($scoreLine->getPoints()) + ($score->getPoints());
            $quizNb = ($scoreLine->getQuizNb()) + 1;
            $scoreTotal = ($points/$quizNb)*10;
            // and set them
            $scoreLine->setPoints($points);
            $scoreLine->setQuizNb($quizNb);
            $scoreLine->setScore($scoreTotal);
            // Set the updated_at time
            $scoreLine->setUpdatedAt(new \DateTime());

            $em->flush();

            return $this->json(['message' => 'Score modifié'], Response::HTTP_OK);
        }
    }
}
