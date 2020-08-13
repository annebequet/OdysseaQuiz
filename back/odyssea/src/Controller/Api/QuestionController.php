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
        
        // Return an error if the category is empty
        // if(!$questions){
        //     return $this->json([
        //         'error' => 'Il n\'y a pas de question pour cette catégorie'
        //     ]);
        // }
        
        return $this->json($questions, 200, [], ['groups' => 'get_quest_by_cat']);
    }
}
