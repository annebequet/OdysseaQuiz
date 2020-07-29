<?php

namespace App\Controller\Api;

use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * Get all Categories
     * 
     * @Route("/api/categories", name="api_categories_get", methods={"GET"})
     */
    public function getAll(CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->findAll();
        dump($categories);

        return $this->json($categories, 200, [], ['groups' => 'categories_get']);
    }
}
