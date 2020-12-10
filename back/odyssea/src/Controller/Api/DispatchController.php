<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DispatchController extends AbstractController
{
    /**
     * Dispatch the Request according to the environment
     * 
     * @Route("/api/questions/{environmentId<\d+>}/{categoryId<\d+>}", name="api_dispatch_questions_get", methods={"GET"})
     */
    public function dispatchGetQuestions(Request $request, $environmentId, $categoryId)
    {
        if ($environmentId == 1) {
            return $this->redirectToRoute('api_questions_adult_get', [
                'request' => $request,
                'environmentId' => $environmentId,
                'categoryId' => $categoryId
            ], 307);
        }
        if ($environmentId == 2) {
            return $this->redirectToRoute('api_questions_kid_get', [
                'request' => $request,
                'environmentId' => $environmentId,
                'categoryId' => $categoryId
            ], 307);
        }
    }
}
