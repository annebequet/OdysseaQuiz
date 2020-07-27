<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(Request $request, SerializerInterface $serializer)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        // On déserialise notre JSON en entité Doctrine
        $user = $serializer->deserialize($content, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        return $this->redirectToRoute('api_login',[
            'user' => $user,
        ]);
    }

    /**
     * @Route("/api/login", name="api_login")
     */
    public function ApiLogin(AuthenticationUtils $authenticationUtils, UserRepository $userRepository, Request $request, SerializerInterface $serializer)
    {

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        $currentUser = $userRepository->find($user->getId());
        
        // On déserialise notre JSON en entité Doctrine
        $user = $serializer->deserialize($content, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $currentUser]);

        //dd($currentUser);

        return $this->json([
            'last_username' => $lastUsername, 
            'user' => $user,
            'error' => $error
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
