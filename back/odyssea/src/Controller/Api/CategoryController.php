<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Response;
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

        return $this->json($categories, 200, [], ['groups' => 'categories_get']);
    }

    /**
     * Get one category
     * 
     * @Route("/api/categories/{id<\d+>}", name="api_categories_get_one", methods={"GET"})
     */
    public function getOne($id, CategoryRepository $categoryRepository, Category $category)
    {
        $category = $categoryRepository->find($category);

        // Check if the Category exists, if not, return 404
        if ($category === null) {
            return $this->json(['error' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($category, 200, [], ['groups' => 'categories_get_one']);
    }
}
