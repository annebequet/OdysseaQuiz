<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DispatchController extends AbstractController
{
    /**
     * Dispatch
     * @Route("/api/score/{environmentId<\d+>}", name="api_dispatch_results", methods={"POST"})
     */
    public function dispatch(Request $request, $environmentId)
    {
        if ($environmentId == 1) {
            return $this->redirectToRoute('api_questions_update_grade', [
                'request' => $request
            ], 307);
        }
        if ($environmentId == 2) {
            return $this->redirectToRoute('api_questions_image_update_grade', [
                'request' => $request
            ], 307);
        }
    }
}
