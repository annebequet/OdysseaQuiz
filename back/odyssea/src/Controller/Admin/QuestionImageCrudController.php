<?php

namespace App\Controller\Admin;

use App\Entity\QuestionImage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class QuestionImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return QuestionImage::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            AssociationField::new('category', 'Catégorie'),
            TextField::new('name', 'Slug')
                ->hideOnIndex()                
                ->setHelp('Utilisez seulement des minuscules et des tirets.'),
            TextareaField::new('title', 'Question'),
            AssociationField::new('choices', 'Réponses proposées')
                ->setHelp('Entrez 4 réponses seulement'),
            AssociationField::new('correctAnswerObject', 'Bonne réponse'),
        ];
    }
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Questions(enfant)')
            ->setPageTitle('new', 'Ajouter une question(enfant)')
            ->setPageTitle('edit', 'Éditer une question(enfant)')
            ->setPageTitle('detail', 'Détails')
        ;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('category')
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
            return $action->setLabel('Créer une question(enfant)');
        });
    }
}
