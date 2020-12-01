<?php

namespace App\Controller\Api;

use App\Entity\GradeAdult;
use App\Entity\Question;
use App\Repository\GradeAdultRepository;
use App\Repository\QuestionRepository;
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
     * Get all Questions by Environment and Category
     * @Route("/api/questions/{environmentId<\d+>}/{categoryId<\d+>}", name="api_questions_getByEnvAndCat", methods={"GET"})
     */
    public function getAllByEnvironmentAndCategory($categoryId, $environmentId, QuestionRepository $questionRepository)
    {
        $questions = $questionRepository->findBy([
            'environment' => $environmentId,
            'category' => $categoryId
            ]);
        // dump($questions);
        
        // Return an error if the category is empty
        // if(!$questions){
        //     return $this->json([
        //         'error' => 'Il n\'y a pas de question pour cette catégorie'
        //     ]);
        // }
        
        return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
    }

    /**
     * Get all Questions already answered by Environment and Category
     * @Route("/api/questions/grades/{userId<\d+>}/{environmentId<\d+>}/{categoryId<\d+>}", name="api_questions_grades_getByEnvAndCat", methods={"GET"})
     */
    public function getAllGradesByEnvironmentAndCategory($userId, $categoryId, $environmentId, GradeAdultRepository $gradeAdultRepository)
    {
        $questions = $gradeAdultRepository->findBy([
            'user' => $userId,
            ]);
    
        return $this->json($questions, 200, [], ['groups' => 'grades_get_one']);
    }

    /**
     * Get questions by grades
     * @Route("/api/questions/{userId<\d+>}/{environmentId<\d+>}/{categoryId<\d+>}", name="api_questions_send", methods={"GET"})
     */
    public function getQuestions($userId, $categoryId, $environmentId, QuestionRepository $questionRepository, UserRepository $userRepository)
    {
        //$user = $this->getUser();
        $user = $userRepository->find($userId);
        
        // Get mix of questions
        for ($i=0; $i <= 5 ; $i++) {
            $grade[$i] = $questionRepository->findRandom($userId, $environmentId, $categoryId, $i);

            // If the user doesn't have a question with the specified grade
            for ($x=1; $x < 5 ; $x++) {
                if ($grade[$i] == null) {
                    // Get a question in the previous grade
                    $question = $questionRepository->findRandom($userId, $environmentId, $categoryId, $i-$x);
                    if(array_search($question, $grade) === false) {
                        $grade[$i] = $questionRepository->findRandom($userId, $environmentId, $categoryId, $i-$x);
                    }
                }
            }
        }
        return $this->json($grade, 200, [], ['groups' => 'questions_get_grades']);
    }
}
