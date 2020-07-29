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
        dump($users);

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
        dump($userFull);

        // Check if the User exists, if not, return 404
        if ($user === null) {
            return $this->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($userFull, 200, [], ['groups' => 'users_get_one']);
    }

    /**
     * Edit user (PUT)
     * 
     * @Route("/api/users/{id<\d+>}", name="api_users_put", methods={"PUT"})
     * @Route("/api/users/{id<\d+>}", name="api_users_patch", methods={"PATCH"})
     */
    public function put(User $user = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Check if the User exists, if not, return 404
        if ($user === null) {
            return $this->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        // Serialize the updated data according to an User entity
        $updatedData = $serializer->deserialize($request->getContent(), User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        // Get the password, encode and set it to User
        $password = $user->getPassword();
        if (!empty($password))
            {
                $passwordHashed = $passwordEncoder->encodePassword($user, $password);
                $user->setPassword($passwordHashed);
            }

        // Set the updated_at time
        $user->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->json(['message' => 'User updated'], Response::HTTP_OK);
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
            return $this->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        // Remove the User from the database
        $em->remove($user);
        $em->flush();

        return $this->json(['message' => 'User deleted'], Response::HTTP_OK);
    }
}
