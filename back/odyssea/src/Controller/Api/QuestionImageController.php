<?php

namespace App\Controller\Api;

use App\Entity\QuestionImage;
use App\Repository\ScoreRepository;
use App\Repository\QuestionImageRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuestionImageController extends AbstractController
{
    /**
     * Get questions by grades
     * @Route("/api/questions/kid/{environmentId<\d+>}/{categoryId<\d+>}", name="api_get_questions_kid", methods={"GET"})
     */
    public function getQuestions($categoryId, $environmentId = 2, QuestionImageRepository $questionImageRepository, ScoreRepository $scoreRepository)
    {
        $user = $this->getUser();
        
        $score = $scoreRepository->findOneBy([
            "user" => $user,
            "environment" => $environmentId,
            "category" => $categoryId
        ]);

        if($score) {
            $quizNb = $score->getQuizNb();
        }

        // If the player never played or less than 10 quiz for this env/cat, select questions from all grades randomnly
        if ($score == null or $quizNb < 10)
        {
            $questions = $questionImageRepository->findTenRandom($environmentId, $categoryId);

            return $this->json($questions, 200, [], ['groups' => 'get_questImage_by_cat']);
        }

        // Else get a mix of questions from different grades
        else 
        {
            for ($i=0; $i <= 5 ; $i++) {
                $grade[$i] = $questionImageRepository->findOneRandom($user, $environmentId, $categoryId, $i);

                // If the user doesn't have a question with the specified grade
                for ($x=1; $x < 5 ; $x++) {
                    if ($grade[$i] == null) {
                        // Get a question in the previous grade
                        $question = $questionImageRepository->findOneRandom($user, $environmentId, $categoryId, $i-$x);
                        if (array_search($question, $grade) === false) {
                            $grade[$i] = $questionImageRepository->findOneRandom($user, $environmentId, $categoryId, $i-$x);
                        }
                    }
                }
            }
            return $this->json($grade, 200, [], ['groups' => 'questions_get_grades']);
        }
    }
}
