<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login()
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException();
        }

        // @todo Renouveler le token à la connexion
        // @todo Et/ou avec une date d'expiration (mais pourquoi finalement ?)
        // @todo A chaque modif de mot de passe

        return $this->json([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
            'token' => $user->getApiToken(),
        ]);
    }

    /**
     * @Route("/api/logout", name="app_logout", methods={"GET"})
     */
    public function logout()
    {
    }
}
