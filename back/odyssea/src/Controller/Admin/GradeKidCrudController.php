<?php

namespace App\Controller\Admin;

use App\Entity\GradeKid;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;

class GradeKidCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return GradeKid::class;
    }

    public function configureFields(string $pageName): iterable
    {
        
        $fields = [
            IdField::new('id')
                ->onlyOnIndex(),
            AssociationField::new('user', 'Joueur'),
            AssociationField::new('question', 'Question'),
            IntegerField::new('grade', 'Niveau'),
            ArrayField::new('Deck', 'Tas')
        ];

        return $fields;
    }

    public function configureActions(Actions $actions): Actions
    {
    
    return $actions
        // this will forbid to create, edit or delete entities in the backend
        ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }

   public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Notes(Enfant)')
        ;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('user')
            ->add('question')
        ;
    }
}
