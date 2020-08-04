<?php

namespace App\Subscribers;

use App\Entity\Question;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class QuestionSubscriber implements EventSubscriberInterface
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

        // Verify if the entity is a Question
        if ($entity instanceof Question) {
            
            // Update its updatedAt time
            $entity->setUpdatedAt(new \DateTime());
        }
    }
}