<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class QuestionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Question::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            ChoiceField::new('type')
                ->hideOnIndex()
                ->setChoices([
                        '1 bonne réponse sur 4' => 'radiogroup',
                        'Images' => 'image'
                        ]),
            AssociationField::new('category', 'Catégorie'),
            AssociationField::new('environment', 'Environnement'),
            TextField::new('name', 'Slug')
                ->hideOnIndex()                
                ->setHelp('Utilisez seulement des minuscules et des tirets.'),
            TextareaField::new('title', 'Question'),
            FormField::addPanel('Réponses'),
            ArrayField::new('choices', 'Réponses proposées')
                ->setHelp('Entrez 4 réponses seulement'),
            TextField::new('correctAnswer', 'Bonne réponse')
        ];
    }
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Questions')
            ->setPageTitle('new', 'Question')
            ->setPageTitle('edit', 'Question')
            ->setPageTitle('detail', 'Question')
        ;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('category')
            ->add('environment')
        ;
    }
}
