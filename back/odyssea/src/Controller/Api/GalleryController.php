<?php

namespace App\Controller\Api;

use App\Entity\Gallery;
use App\Repository\GalleryRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GalleryController extends AbstractController
{
    /**
     * Get all avatars
     * 
     * @Route("/avatars", name="api_avatars_get", methods={"GET"})
     */
    public function getAll(GalleryRepository $galleryRepository)
    {
        $avatars = $galleryRepository->findAll();
        dump($avatars);

        return $this->json($avatars, 200, [], ['groups' => 'avatars_get']);
    }

    /**
     * Get one avatar
     * 
     * @Route("/avatars/{id<\d+>}", name="api_avatars_get_one", methods={"GET"})
     */
    public function getOne($id, GalleryRepository $galleryRepository, Gallery $avatar)
    {
        $avatar = $galleryRepository->find($avatar);

        // Check if the Avatar exists, if not, return 404
        if ($avatar === null) {
            return $this->json(['error' => 'Avatar not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($avatar, 200, [], ['groups' => 'avatar_get_one']);
    }
}
