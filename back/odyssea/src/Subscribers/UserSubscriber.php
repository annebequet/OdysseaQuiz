<?php

namespace App\Subscribers;

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
            BeforeEntityPersistedEvent::class => ['setPassword'],
            BeforeEntityUpdatedEvent::class => ['setUpdatedPassword']
        ];
    }

    public function setPassword(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();
        $passwordHashed = $this->passwordEncoder->encodePassword($entity, $entity->getPassword());
        $entity->setPassword($passwordHashed);
        if(empty($entity->getAvatar())) {
            $entity->setAvatar($this->galleryRepository->find(1));
        }
    }

    public function setUpdatedPassword(BeforeEntityUpdatedEvent $event)
    {
        $entity = $event->getEntityInstance();
        $passwordHashed = $this->passwordEncoder->encodePassword($entity, $entity->getPassword());
        $entity->setUpdatedAt(new \DateTime());
        $entity->setPassword($passwordHashed);
    }
}