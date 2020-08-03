<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
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
     * @Route("/login", name="api_login", methods={"POST"})
     */
    public function login(EntityManagerInterface $entityManager)
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException();
        }

        // Create a new token at each connection and set it in the database
        $apitoken = md5(uniqid(rand(), true)); 
        $user->setApiToken($apitoken);
        $entityManager->flush();

        return $this->json([
            'pseudo' => $user->getPseudo(),
            'avatar' => $user->getAvatar(),
            'roles' => $user->getRoles(),
            'token' => $user->getApiToken(),
            'logged' => true
        ]);
    }


    /**
     * @Route("/islogged", name="app_islogged", methods={"GET"})
     */
    public function isLogged(Request $request, UserRepository $userRepository)
    {
        $apiToken = $request->headers->get('X-AUTH-TOKEN');      

        if($apiToken === null){
            return $this->json([
                'logged' => false
            ]);
        }

        $user = $userRepository->findBy(['apiToken' => $apiToken]);

        return $this->json($user, 200, [], ['groups' => 'users_get_one']);
    }


    /**
     * @Route("/logout", name="app_logout", methods={"GET"})
     */
    public function logout()
    {
        
    }

    /**
     * Add User
     * 
     * @Route("/register", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Get the content of the request
        $content = $request->getContent();

        // Deserialiaze the json content into a User entity
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
            // We can also return the full array of JSON object
            //return $this->json($errors, 400);
        }

        // Encode the password and set it to the entity
        $passwordHashed = $passwordEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($passwordHashed);
        
        // Add the new user to the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Redirect to the Api route of the new User with a 201 status code
        return $this->redirectToRoute('api_users_get_one', ['id' => $user->getId()], Response::HTTP_CREATED);
    }
}
