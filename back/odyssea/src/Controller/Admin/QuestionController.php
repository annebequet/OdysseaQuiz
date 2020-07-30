<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController extends AbstractController
{
    /**
     * @Route("/admin/question", name="admin_question")
     */
    public function index()
    {
        return $this->render('admin/question/index.html.twig', [
            'controller_name' => 'QuestionController',
        ]);
    }
}
