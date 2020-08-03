<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AvatarField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            AvatarField::new('avatar'),
            IdField::new('id')->onlyOnIndex(),
            EmailField::new('email'),
            TextField::new('pseudo'),
            TextField::new('last_name', 'Nom'),
            TextField::new('first_name', 'Prénom'),
            TextField::new('password', 'Mot de passe')->hideOnIndex(),
            ChoiceField::new('roles')
                ->setChoices([
                        'Admin' => 'ROLE_ADMIN',
                        'User' => 'ROLE_USER'
                ])
                ->allowMultipleChoices(),
            AssociationField::new('environment')
            ->setFormTypeOptions(['required' => true]),

        ];
    }
    
}
