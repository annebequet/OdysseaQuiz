<?php

namespace App\Subscribers;

use App\Entity\GradeKid;
use App\Entity\QuestionImage;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class QuestionImageSubscriber implements EventSubscriberInterface
{
    private $userRepository;
    private $entityManager;

    public function __construct(UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->entityManager = $entityManager;
    }
    public static function getSubscribedEvents()
    {
        return [
            AfterEntityPersistedEvent::class => ['setGrades'],
        ];
    }

    public function setGrades(AfterEntityPersistedEvent $event)
    {
        // Get the data sent through the form
        $entity = $event->getEntityInstance();

        // Verify if the entity is an User
        if ($entity instanceof QuestionImage) {

            // Get all Users
            $allUsers = $this->userRepository->findAll();

            // Set a new GradeKid with the grade 0 for the question for each user
            foreach ($allUsers as $user) {
                $gradeKid = new GradeKid;
                $gradeKid->setQuestion($entity);
                $gradeKid->setUser($user);
                $gradeKid->setGrade(0);
                $this->entityManager->persist($gradeKid);
                $this->entityManager->flush();
            }
        }
    }
}