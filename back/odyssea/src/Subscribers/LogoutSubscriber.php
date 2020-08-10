<?php

namespace App\Subscribers;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Event\LogoutEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class LogoutSubscriber implements EventSubscriberInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents()
    {
        return [
            LogoutEvent::class => ['unsetToken']
        ];
    }

    public function unsetToken (LogoutEvent $logoutEvent)
    {
        $user = $logoutEvent->getToken()->getUser();
        $user->eraseCredentials();
        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}