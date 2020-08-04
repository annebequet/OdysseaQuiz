<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

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
            TextField::new('type')
                ->hideOnIndex(),
            TextField::new('name', 'Slug')
                ->hideOnIndex(),
            TextareaField::new('title', 'Question'),
            ArrayField::new('choices', 'Réponses proposées')
                ->setHelp('Entrez 4 réponses seulement'),
            TextField::new('correctAnswer', 'Bonne réponse'),
            AssociationField::new('category', 'Catégorie'),
            AssociationField::new('environment', 'Environnement')
        ];
    }
    
}
