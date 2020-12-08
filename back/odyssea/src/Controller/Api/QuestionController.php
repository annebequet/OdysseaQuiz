<?php

namespace App\Controller\Api;

use App\Entity\GradeAdult;
use App\Entity\Question;
use App\Repository\GradeAdultRepository;
use App\Repository\QuestionRepository;
use App\Repository\ScoreRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class QuestionController extends AbstractController
{
    /**
     * Get questions by grades
     * @Route("/api/questions/adult/{environmentId<\d+>}/{categoryId<\d+>}", name="api_get_questions_adult", methods={"GET"})
     */
    public function getQuestions($categoryId, $environmentId, QuestionRepository $questionRepository, ScoreRepository $scoreRepository)
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
            $questions = $questionRepository->findTenRandom($environmentId, $categoryId);

            if ($session == null) {
                $score->setSession(0);
            }
            if ($session < 10) {
                $score->setSession($session + 1);
            }

            return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
        }

        // Else get a mix of questions from different grades
        else 
        { 
            $questions = $questionRepository->findMultiplesRandom($user, $environmentId, $categoryId, $session);

            // If we don't have 10 questions in the session
            if (count($questions) < 10) {
                // Define the number of question missing to have a quiz of 10 questions
                $rest = 10 - count($questions);
                // Complete the quiz
                $moreQuestions = $questionRepository->findRandom($user, $environmentId, $categoryId, 1, $rest);
                // Insert them into the questions
                foreach ($moreQuestions as $question) {
                    $questions[] = $question;
                }
            }
            dd($session, $questions, $rest);
        }               
        return $this->json($questions, 200, [], ['groups' => 'questions_get_grades']);
        
    }
}
