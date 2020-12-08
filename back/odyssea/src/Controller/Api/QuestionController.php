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
        }

        // If the player never played or less than 10 quiz for this env/cat, select questions from all grades randomnly
        if ($score == null or $quizNb < 10)
        {
            $questions = $questionRepository->findTenRandom($environmentId, $categoryId);

            return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
        }

        // Else get a mix of questions from different grades
        else 
        {
            $questions = $questionRepository->findMultiplesRandom($user, $environmentId, $categoryId);
            dd($questions);
            //foreach ($questions as $question) {
                //if (count(array_keys($questions, $question)) > 1) 
                //{
                    //$double[] = $question;
                    // $this->cardIds = array_unique($this->cardIds);
                //}
            //}
            
            // Get 3 Questions of grade 0
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 0);
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 0);
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 0);

            // Get 2 Questions of grade 1
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 1);
            if (array_search($questionRepository->findOneRandom($user, $environmentId, $categoryId, 1), $questions) == false) {
                $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 1);
            }
            else {
                $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 2);
                if ($question == null) {
                    $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 3);
                    if ($question == null) {
                        $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 4);
                    }
                    if ($question == null) {
                        $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 5);
                    }
                }
                $questions[] = $question;
            }
            
            // Get 2 Questions of grade 2
            $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 2);
            if (array_search($question, $questions) == false && $question !== null) {
                $questions[] = $question;
            }
            else {
                $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 3);
                if ($question == null) {
                    $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 4);
                    if ($question == null) {
                        $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 5);
                    }
                }
                $questions[] = $question;
            }
            dd($questions);

            // Get 1 Question of grade 3
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 3);

            // Get 1 Question of grade 4
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 4);

            // Get 1 Question of grade 5
            $questions[] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, 5);

            foreach ($questions as $question) {
                if (count(array_keys($questions, $question)) > 1) 
                {
                    $double[] = $question;
                }
            }
            dd($questions, $double);
        }               
        return $this->json($allQuestions, 200, [], ['groups' => 'questions_get_grades']);
        
    }
}
