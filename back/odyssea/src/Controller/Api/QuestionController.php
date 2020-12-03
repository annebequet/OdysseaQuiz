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
            for ($i=0; $i <= 5 ; $i++) {
                $grade[$i] = $questionRepository->findRandom($user, $environmentId, $categoryId, $i, 1);

                // If the user doesn't have a question with the specified grade
                for ($x=1; $x < 5 ; $x++) {
                    if ($grade[$i] == null) {
                        // Get a question in the previous grade
                        $question = $questionRepository->findOneRandom($user, $environmentId, $categoryId, $i-$x, 1);
                        if (array_search($question, $grade) === false) {
                            $grade[$i] = $questionRepository->findOneRandom($user, $environmentId, $categoryId, $i-$x, 1);
                        }
                    }
                }
            }
            return $this->json($grade, 200, [], ['groups' => 'questions_get_grades']);
        }
    }
}
