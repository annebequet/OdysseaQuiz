<?php

namespace App\Subscribers;

use DateTime;
use App\Entity\User;
use App\Entity\GradeAdult;
use App\Entity\GradeKid;
use App\Repository\UserRepository;
use App\Repository\GalleryRepository;
use App\Repository\QuestionImageRepository;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserSubscriber implements EventSubscriberInterface
{
    private $passwordEncoder;
    private $galleryRepository;
    private $questionRepository;
    private $questionImageRepository;
    private $entityManager;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, GalleryRepository $galleryRepository, QuestionRepository $questionRepository, QuestionImageRepository $questionImageRepository ,EntityManagerInterface $entityManager)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->galleryRepository = $galleryRepository;
        $this->questionRepository = $questionRepository;
        $this->questionImageRepository = $questionImageRepository;
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setPasswordAndAvatar'],
            AfterEntityPersistedEvent::class => ['setGrades']
        ];
    }

    public function setPasswordAndAvatar(BeforeEntityPersistedEvent $event)
    {
        // Get the data sent through the form
        $entity = $event->getEntityInstance();

        // Verify if the entity is an User
        if ($entity instanceof User) {

            // Encode the password
            $passwordHashed = $this->passwordEncoder->encodePassword($entity, $entity->getPassword());

            // Set it to the User entity
            $entity->setPassword($passwordHashed);

            // If an avatar isn't selected, set it by default to the first avatar in the Gallery table (sea lion)
            if (empty($entity->getAvatar())) {
                $entity->setAvatar($this->galleryRepository->find(1));
            }
        }
    }

    public function setGrades(AfterEntityPersistedEvent $event)
    {
        // Get the data sent through the form
        $entity = $event->getEntityInstance();

        // Verify if the entity is an User
        if ($entity instanceof User) {

            // Get all Adult Questions
            $allAdultQuestions = $this->questionRepository->findAll();
            // Get all Questions
            $allKidQuestions = $this->questionImageRepository->findAll();

            // Set a new GradeAdult with the grade 0 for the user for each question
            foreach ($allAdultQuestions as $question) {
                $gradeAdult = new GradeAdult;
                $gradeAdult->setQuestion($question);
                $gradeAdult->setUser($entity);
                $gradeAdult->setGrade(0);
                $this->entityManager->persist($gradeAdult);
                $this->entityManager->flush();
            }

            // Set a new GradeKid with the grade 0 for the user for each question
            foreach ($allKidQuestions as $question) {
                $gradeKid = new GradeKid;
                $gradeKid->setQuestion($question);
                $gradeKid->setUser($entity);
                $gradeKid->setGrade(0);
                $this->entityManager->persist($gradeKid);
                $this->entityManager->flush();
            }
        }
    }
}