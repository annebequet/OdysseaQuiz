<?php

namespace App\Controller\Api;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

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

    /**
     * Add User
     * 
     * @Route("/api/register", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        // On déserialise notre JSON en entité Doctrine
        $user = $serializer->deserialize($content, User::class, 'json');
        //dd($user);
        // Merci à notre custom denormalizer

        // Valider l'entité avec le service Validator
        $errors = $validator->validate($user);

        // En cas d'erreurs, renvoyer la liste en JSON
        // dd($errors);
        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
            // On aurait pu également renvoyer tout le tableau d'objet en JSON
            //return $this->json($errors, 400);
        }

        //dd($user);
        // Flusher via le manager
        $passwordHashed = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($passwordHashed);
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_users_get_one', ['id' => $user->getId()], Response::HTTP_CREATED);
    }
}
