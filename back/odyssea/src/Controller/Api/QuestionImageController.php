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
            $session = $score->getSession();
        }

        // If the player never played or less than 10 quiz for this env/cat, select questions from all grades randomnly
        if ($score == null or $quizNb < 10)
        {
            $questions = $questionImageRepository->findTenRandom($environmentId, $categoryId);

            return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
        }

        // Else get a mix of questions from different grades
        else 
        { 
            $questions = $questionImageRepository->findMultiplesRandom($user, $environmentId, $categoryId, $session);
            
            // If we don't have 10 questions in the session
            if (count($questions) < 10) {
                // Define the number of question missing to have a quiz of 10 questions
                $rest = 10 - count($questions);
                // Complete the quiz
                $moreQuestions = $questionImageRepository->findRandom($user, $environmentId, $categoryId, 1, $rest);
                //dd($questions, $rest, $moreQuestions);
                // Insert them into the questions
                foreach ($moreQuestions as $question) {
                    $questions[] = $question;
                }
            }
        }          
        return $this->json($questions, 200, [], ['groups' => 'questions_get_grades']);
    }
}
