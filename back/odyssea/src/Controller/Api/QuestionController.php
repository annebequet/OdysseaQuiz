<?php

namespace App\Controller\Api;

use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
        //! une erreur à mettre ?
        
        return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
    }
}
