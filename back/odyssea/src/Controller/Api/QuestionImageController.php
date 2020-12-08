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
    public function getQuestions($categoryId, $environmentId = 2, QuestionImageRepository $questionImageRepository)
    {
        $questions = $questionImageRepository->findTenRandom($environmentId, $categoryId);

        return $this->json($questions, 200, [], ['groups' => 'get_questImage_by_cat']);
    }
}
