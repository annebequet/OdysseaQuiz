<?php

namespace App\Controller\Admin;

use App\Entity\Environment;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

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
            TextField::new('name'),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
    return $actions
        // ...
        // this will forbid to create or delete entities in the backend
        ->disable(Action::NEW, Action::DELETE)
    ;
    }
    
}
