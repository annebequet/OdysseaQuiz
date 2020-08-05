<?php

namespace App\Subscribers;

use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class EntitiesSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityUpdatedEvent::class => ['setUpdatedAt']
        ];
    }

    public function setUpdatedAt(BeforeEntityUpdatedEvent $event)
    {
        // Get the data sent through the form
        $entity = $event->getEntityInstance();
            
        // Update its updatedAt time
        $entity->setUpdatedAt(new \DateTime());
    }
}