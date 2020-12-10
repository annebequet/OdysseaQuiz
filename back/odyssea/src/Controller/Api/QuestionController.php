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
     * Get Questions
     * 
     * @Route("/api/questions/adult/{environmentId<\d+>}/{categoryId<\d+>}", name="api_questions_adult_get", methods={"GET"})
     */
    public function getQuestions($categoryId, $environmentId, QuestionRepository $questionRepository, ScoreRepository $scoreRepository)
    {
        // Get the current User
        $user = $this->getUser();

        // Get the Score corresponding to the User/Environment/Category combination
        $score = $scoreRepository->findOneBy([
            "user" => $user,
            "environment" => $environmentId,
            "category" => $categoryId
        ]);

        if($score) {
            $quizNb = $score->getQuizNb();
            $session = $score->getSession();
        }

        // If the player never played or less than 10 quiz for this Environment/Category, select Questions randomnly
        if ($score == null or $quizNb < 10)
        {
            $questions = $questionRepository->findTenRandom($environmentId, $categoryId);

            return $this->json($questions, 200, [], ['groups' => 'api_questions_get']);
        }

        // Else get Questions according to the session number 
        else 
        { 
            // Get Questions from the decks containing the session number
            $questions = $questionRepository->findMultiplesRandom($user, $environmentId, $categoryId, $session);
            
            // If we don't have 10 Questions from those decks
            if (count($questions) < 10) {
                // Define the number of question missing to get a quiz of 10 questions
                $rest = 10 - count($questions);
                
                // Complete the quiz
                $moreQuestions = $questionRepository->findRandom($user, $environmentId, $categoryId, 1, $rest);

                // Insert them into the questions
                foreach ($moreQuestions as $question) {
                    $questions[] = $question;
                }
            }
        }          
        return $this->json($questions, 200, [], ['groups' => 'api_questions_get']);
    }
}
