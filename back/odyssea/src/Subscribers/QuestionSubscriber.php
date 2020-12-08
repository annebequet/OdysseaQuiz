<?php

namespace App\Subscribers;

use App\Entity\GradeAdult;
use App\Entity\Question;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class QuestionSubscriber implements EventSubscriberInterface
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
        if ($entity instanceof Question) {

            // Get all Users
            $allUsers = $this->userRepository->findAll();

            // Set a new GradeAdult with the grade 0 for the question for each user
            foreach ($allUsers as $user) {
                $gradeAdult = new GradeAdult;
                $gradeAdult->setQuestion($entity);
                $gradeAdult->setUser($user);
                $gradeAdult->setGrade(1);
                $this->entityManager->persist($gradeAdult);
                $this->entityManager->flush();
            }
        }
    }
}