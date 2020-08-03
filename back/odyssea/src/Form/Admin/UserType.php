<?php

namespace App\Form\Admin;

use App\Entity\User;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName')
            ->add('lastName')
            ->add('pseudo')
            ->add('email', null, [
                'empty_data' => '',
                ])
            ->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $event) {
                // On récupère l'entité User
                $user = $event->getData();
                // On récupère le builder pour continuer le form
                $builder = $event->getForm();

                // Si notre user est existant en database, on applique le mapped=false
                // S'il a un id, il existe en base
                if ($user->getId() !== null) {
                    $builder->add('password', PasswordType::class, [
                        'empty_data' => '',
                        'mapped' => false,
                        'attr' => [
                            'placeholder' => 'Laisser vide si inchangé',
                        ]
                    ]);
                } else {
                    $builder->add('password', PasswordType::class, [
                        'empty_data' => '',
                    ]);
                }
            })
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Admin' => 'ROLE_ADMIN',
                    'User' => 'ROLE_USER'
                ],
                'expanded' => true,
                'multiple' => true
            ])
            ->add('avatar', ChoiceType::class, [
                'choices' => [
                    'Crabe' => 'https://image.flaticon.com/icons/svg/1805/1805801.svg',
                    'Dauphin' => 'https://image.flaticon.com/icons/svg/1805/1805946.svg',
                    'Phoque' => 'https://image.flaticon.com/icons/svg/1805/1805880.svg',
                    'Tortue' => 'https://image.flaticon.com/icons/svg/1805/1805958.svg'
                ],
                'expanded' => true,
                'multiple' => false
            ])
            ->add('environment', null, [
                'label' => 'Environnement',
                'placeholder' => 'Choisissez un environnement'
            ]);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'attr' => ['novalidate' => 'novalidate']
        ]);
    }
}
