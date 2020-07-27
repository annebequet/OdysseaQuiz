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
        // Si on souhaite en plus optimiser la requête, on utilise une custom
        $userFull = $userRepository->find($user);
        dump($userFull);

        // @todo : Si pas d'objet, renvoyer une 404 en JSON

        return $this->json($userFull, 200, [], ['groups' => 'users_get_one']);

        // Note : Sérialiser plusieurs groupes est possible : ['groups' => ['users_get', 'users_get_one']] est possible
    }

    /**
     * Add User
     * 
     * @Route("/api/users", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        // Le JSON est dans le contenu de la requête
        $content = $request->getContent();

        // {
        //     "title": "New user with genres",
        //     "genres": [
        //         111,
        //         112
        //     ]
        // }

        // On déserialise notre JSON en entité Doctrine
        $user = $serializer->deserialize($content, User::class, 'json');

        // Merci à notre custom denormalizer

        // Valider l'entité avec le service Validator
        $errors = $validator->validate($user);
        // En cas d'erreurs, renvoyer la liste en JSON
        // dd($errors);
        if (count($errors) > 0) {
            $errorsArray = [];
            foreach ($errors as $error) {
                // Ici on crée un tableau associatif dont la clé est la propriété en erreur
                // et qui contient un tableau dont les éléments sont les messages d'erreur de la propriété concernée
                // $errorsArray = [
                //     'title' => [
                //         'erreur 1',
                //         'erreur 2',
                //     ],
                //     'email' => []
                // ];
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
            // On aurait pu également renvoyer tout le tableau d'objet en JSON
            //return $this->json($errors, 400);
        }

        // Flusher via le manager
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Rediriger vers l'URL de la ressource avec un statut 201
        return $this->redirectToRoute('api_users_get_one', ['id' => $user->getId()], Response::HTTP_CREATED);
    }

    /**
     * Edit user (PUT)
     * 
     * @Route("/api/users/{id<\d+>}", name="api_users_put", methods={"PUT"})
     * @Route("/api/users/{id<\d+>}", name="api_users_patch", methods={"PATCH"})
     */
    public function put(User $user = null, EntityManagerInterface $em, SerializerInterface $serializer, Request $request)
    {
        // 1. On souhaite modifier le utilisateur dont l'id est transmis via l'URL

        // 404 ?
        if ($user === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        // 2. On va devoir associer les données JSON reçues sur l'entité existante
        // On désérialise les données reçues depuis le front ($request->getContent())... 
        // ... dans l'objet User à modifier
        // @see https://symfony.com/doc/current/components/serializer.html#deserializing-in-an-existing-object
        $updatedData = $serializer->deserialize($request->getContent(), User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        $em->flush();

        return $this->json(['message' => 'Utilisateur modifié.'], Response::HTTP_OK);
    }

    /**
     * Delete user
     * 
     * @Route("/api/users/{id<\d+>}", name="api_users_delete", methods={"DELETE"})
     */
    public function delete(User $user = null, EntityManagerInterface $em)
    {
        // 404 ?
        if ($user === null) {
            // On retourne un message JSON + un statut 404
            return $this->json(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($user);
        $em->flush();

        return $this->json(['message' => 'Utilisateur supprimé.'], Response::HTTP_OK);
    }

}
