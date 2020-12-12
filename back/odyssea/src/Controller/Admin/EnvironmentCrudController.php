<?php

namespace App\Controller\Admin;

use App\Entity\Environment;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class EnvironmentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Environment::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            TextField::new('name', 'Nom')
                ->setFormTypeOption('empty_data', ''),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
    return $actions
        ->add(Crud::PAGE_INDEX, Action::DETAIL)
        // this will forbid to create or delete entities in the backend
        ->disable(Action::NEW, Action::DELETE);
    }
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Environnements')
            // ->setPageTitle('new', 'Environnement')
            ->setPageTitle('edit', 'Éditer un environnement')
            ->setPageTitle('detail', 'Environnement')
        ;
    }
}
