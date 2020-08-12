<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Score;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * Get all Users
     *
     * @Route("/api/users", name="api_users_get", methods={"GET"})
     */
    public function getAll(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        //dump($users);

        return $this->json($users, 200, [], ['groups' => 'users_get']);
    }

    /**
     * Get one user
     *
     * @Route("/api/users/{id<\d+>}", name="api_users_get_one", methods={"GET"})
     */
    public function getOne($id, UserRepository $userRepository, User $user)
    {
        // Custom request
        $userFull = $userRepository->find($user);
        //dump($userFull);

        // Check if the User exists, if not, return 404
        if ($user === null) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($userFull, 200, [], ['groups' => 'users_get_one']);
    }

    /**
     * Edit user (PUT)
     *
     * @Route("/api/users/{id<\d+>}", name="api_users_put", methods={"PUT"})
     * @Route("/api/users/{id<\d+>}", name="api_users_patch", methods={"PATCH"})
     */
    public function put(User $user = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Verify if the user exists
        if(!$user) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        // Get the content of the request
        $content = $request->getContent();

        // Get the User password
        $password = $user->getPassword();

        // Deserialiaze the json content into a User entity
        $updatedUser = $serializer->deserialize($content, User::class, 'json', ['object_to_populate' => $user]);

        // Validate the entity with the validator service
        $errors = $validator->validate($updatedUser);

        // If there are errors, return the array in JSON format
        if(count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Get the password from the form
        $newPassword = $updatedUser->getPassword();

        // If the new password is different than the old one
        if($newPassword !== $password) {
            // Encode the password
            $encodedPassword = $passwordEncoder->encodePassword($updatedUser, trim($newPassword));
            // Set it to the User
            $updatedUser->setPassword($encodedPassword);
        }

        // Set the new updatedAt datetime
        $em = $updatedUser->setUpdatedAt(new \DateTime());

        // Save and flush
        $em = $this->getDoctrine()->getManager();
        $em->flush();

        return $this->json(['message' => 'Utilisateur modifié'], Response::HTTP_OK);
    }

    /**
     * Delete user
     *
     * @Route("/api/users/{id<\d+>}", name="api_users_delete", methods={"DELETE"})
     */
    public function delete(User $user = null, EntityManagerInterface $em)
    {
        // Check if the User exists, if not, return 404
        if ($user === null) {
            return $this->json(['error' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        // Remove the User from the database
        $em->remove($user);
        $em->flush();

        return $this->json(['message' => 'Utilisateur supprimé'], Response::HTTP_OK);
    }

    /**
     * Add or Edit Score
     *
     * @Route("/api/score", name="api_add_score", methods={"POST"})
    */
    public function addScore(EntityManagerInterface $em, SerializerInterface $serializer, ScoreRepository $scoreRepository, Request $request, ValidatorInterface $validator)
    {
        // Get the content of the request
        $content = $request->getContent();

        // Deserialiaze the json content into a Score entity
        $score = $serializer->deserialize($content, Score::class, 'json');

        // Validate the entity with the validator service
        $errors = $validator->validate($score);

        // If there are errors, return the array in JSON format
        if(count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        //dd($score);

        $scoreLine = $scoreRepository->findOneBy([
            'user' => $score->getUser(),
            'category' => $score->getCategory(),
            'environment' => $score->getEnvironment()
        ]);
        
        // if there's no score for this user/category/environement yet 
        if (empty($scoreLine)) { 
            // The user played for the first time
            $score->setQuizNb(1);
            $score->setScore(($score->getPoints())*10);
            // Add the new score to the database
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($score);
            $entityManager->flush();
            return $this->json(['message' => 'Score ajouté'], Response::HTTP_CREATED);

        } else {
                   
            // if there's already a score, calculate the new totals
            $points = ($scoreLine->getPoints()) + ($score->getPoints());
            $quizNb = ($scoreLine->getQuizNb()) + 1;
            $scoreTotal = ($points/$quizNb)*10;
            // and set them
            $scoreLine->setPoints($points);
            $scoreLine->setQuizNb($quizNb);
            $scoreLine->setScore($scoreTotal);
            // Set the updated_at time
            $scoreLine->setUpdatedAt(new \DateTime());

            $em->flush();

            return $this->json(['message' => 'Score modifié'], Response::HTTP_OK);
        }
    }
}
