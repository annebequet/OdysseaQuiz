<?php

namespace App\Form\Admin;

use App\Entity\Question;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class QuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            // atm only radiogroup is available
            ->add('type' , ChoiceType::class, [
                'label' => 'Nombre de réponse(s) possible(s) :',
                'choices' => [
                    '1 bonne réponse sur 4' => 'radiogroup'
                    ],
                'expanded' => true,
                'multiple' => false
                ])

            // questions are called by a slug
            // todo contraintes aucun espace et que des minuscules
            ->add('name', TextareaType::class, [
                'label' => 'Le slug de la question ',
                'required' => true,
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Le slug doit être plus long que 5 caractères'
                    ]),
                ]
            ])

            ->add('title', TextareaType::class, [
                'label' => 'Le corps de la question ',
                'required' => true,
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'min' => 5,
                        'minMessage' => 'La question doit être plus longue que 5 caractères'
                    ]),
                ]
                ])


            // ->add('choices')
            // ->add('correctAnswer')
            // todo afficher les propositions en différents champs de texte et faire un radio ? 

            // question theme, atm only one can be selected
            ->add('category', null, [
                'label' => 'Catégorie ',
                'choice_label' => 'name',
            ])

            // environment where the question can come up, atm only one can be selected
            ->add('environment', null, [
                'label' => 'Environnement ',
                'choice_label' => 'name',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Question::class,
            attr
        ]);
    }
}
