<?php

namespace App\Controller\Api;

use App\Entity\QuestionImage;
use App\Repository\QuestionImageRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuestionImageController extends AbstractController
{
    /**
     * Get all Questions by Environment and Category
     * @Route("/api/questions/image/{environmentId<\d+>}/{categoryId<\d+>}", name="api_questions_image_getByEnvAndCat", methods={"GET"})
     */
    public function getAllByEnvironmentAndCategory($categoryId, $environmentId, QuestionImageRepository $questionImageRepository)
    {
        $questions = $questionImageRepository->findBy([
            'environment' => $environmentId,
            'category' => $categoryId
            ]);
        
        return $this->json($questions, 200, [], ['groups' => 'get_questImage_by_cat']);
    }

    /**
     * Get one question image
     * 
     * @Route("/api/question/image/{id<\d+>}", name="api_questions_image_get_one", methods={"GET"})
     */
    public function getOne(QuestionImageRepository $questionImageRepository, QuestionImage $questionImage)
    {
        $questionImage = $questionImageRepository->find($questionImage);

        // Check if the Question exists, if not, return 404
        if ($questionImage === null) {
            return $this->json(['error' => 'Question image not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($questionImage, 200, [], ['groups' => 'questions_image_get_one']);
    }
}
