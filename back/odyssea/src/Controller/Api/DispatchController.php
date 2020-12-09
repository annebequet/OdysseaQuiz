<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DispatchController extends AbstractController
{
    /**
     * Dispatch
     * @Route("/api/questions/{environmentId<\d+>}/{categoryId<\d+>}", name="api_dispatch_get_questions", methods={"GET"})
     */
    public function dispatchGetQuestions(Request $request, $environmentId, $categoryId)
    {
        if ($environmentId == 1) {
            return $this->redirectToRoute('api_get_questions_adult', [
                'request' => $request,
                'environmentId' => $environmentId,
                'categoryId' => $categoryId
            ], 307);
        }
        if ($environmentId == 2) {
            return $this->redirectToRoute('api_get_questions_kid', [
                'request' => $request,
                'environmentId' => $environmentId,
                'categoryId' => $categoryId
            ], 307);
        }
    }
}