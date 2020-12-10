<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Repository\GalleryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(EntityManagerInterface $entityManager)
    {
        // Get the current User
        $user = $this->getUser();

        // If the User doesn't exist, throw an exception
        if (!$user) {
            throw $this->createAccessDeniedException();
        }

        // Create a new token at each connection and set it
        $apitoken = md5(uniqid(rand(), true)); 
        $user->setApiToken($apitoken);
        $entityManager->flush();

        return $this->json([
            'id' => $user->getId(),
            'pseudo' => $user->getPseudo(),
            'avatar' => $user->getAvatar(),
            'roles' => $user->getRoles(),
            'token' => $user->getApiToken(),
            'environmentId' => $user->getEnvironment()->getId(),
            'logged' => true
        ]);
    }


    /**
     * @Route("/api/islogged", name="api_islogged", methods={"GET"})
     */
    public function isLogged(Request $request, UserRepository $userRepository)
    {
        // get the token in the headers
        $apiToken = $request->headers->get('X-AUTH-TOKEN');      

        // If the token is null, no one is connected
        if($apiToken === null){
            return $this->json([
                'logged' => false
            ]);
        }
        else {
            // Find the User by its token
            $user = $userRepository->findBy(['apiToken' => $apiToken]);

            return $this->json($user, 200, [], ['groups' => 'api_users_get_one']);
        }
    }


    /**
     * @Route("/api/logout", name="api_logout", methods={"GET"})
     */
    public function logout(EntityManagerInterface $entityManager)
    {
        // get the current User
        $user = $this->getUser();

        //if there is not, throw an exception
        if (!$user) {
            throw $this->createAccessDeniedException();
        }

        // Erase the token form the database
        $user->setApiToken(null);
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([
            'message' => 'Utilisateur déconnecté.',
        ]);
    }

    /**
     * Add User - Register
     * 
     * @Route("/api/register", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder, GalleryRepository $galleryRepository)
    {
        // Get the content of the request
        $content = $request->getContent();

        // Deserialiaze the json content into an User entity
        $user = $serializer->deserialize($content, User::class, 'json');

        // Validate the entity with the validator service
        $errors = $validator->validate($user);

        // If there are errors, return the array in JSON format
        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Encode the password and set it to the entity
        $passwordHashed = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($passwordHashed);

        // if the User didn't select an Avatar, set it by default to the 1rst Avatar in the database (sea lion)
        if($user->getAvatar() === null) {
            $user->setAvatar($galleryRepository->find(1));
        };
        
        // Persist the new user to the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Redirect to the Api route of the new User with a 201 status code
        return $this->redirectToRoute('api_users_get_one', ['id' => $user->getId()], Response::HTTP_CREATED);
    }
}
