<?php

namespace App\Subscribers;

use App\Entity\User;
use App\Repository\GalleryRepository;
use DateTime;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserSubscriber implements EventSubscriberInterface
{
    private $passwordEncoder;
    private $galleryRepository;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, GalleryRepository $galleryRepository)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->galleryRepository = $galleryRepository;
    }

    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setPasswordAndAvatar'],
            BeforeEntityUpdatedEvent::class => ['setUpdatedPassword']
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
}