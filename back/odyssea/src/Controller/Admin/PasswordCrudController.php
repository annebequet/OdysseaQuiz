<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PasswordCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            TextField::new('pseudo')
                ->onlyOnIndex(),
            EmailField::new('email')
                ->onlyOnIndex(),
            TextField::new('password', 'Mot de passe')
                ->setFormType(PasswordType::class)
                ->hideOnIndex(),
        ];
    }
   
    public function configureActions(Actions $actions): Actions
    {
        return $actions
        // this will forbid to create or delete entities in the backend
        ->disable(Action::NEW, Action::DELETE);
    }
    

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Mots de passe')
            // ->setPageTitle('new', 'Mot de passe')
            ->setPageTitle('edit', 'Mot de passe')
            // ->setPageTitle('detail', 'Mot de passe')
        ;
    }
}
