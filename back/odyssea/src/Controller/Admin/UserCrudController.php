<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Gallery;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AvatarField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        $avatarImage = AvatarField::new('avatar');

        $avatarChoices = AssociationField:: new('avatar');

        $fields = [
            $avatarImage->onlyOnIndex(),
            IdField::new('id')->onlyOnIndex(),
            EmailField::new('email'),
            TextField::new('pseudo'),
            TextField::new('last_name', 'Nom'),
            TextField::new('first_name', 'Prénom'),
            TextField::new('password', 'Mot de passe')
                ->hideOnIndex(),
            $avatarChoices->onlyOnForms(),
            ChoiceField::new('roles')
                ->setChoices([
                        'Admin' => 'ROLE_ADMIN',
                        'User' => 'ROLE_USER'
                ])
                ->allowMultipleChoices(),
            AssociationField::new('environment')
                ->setRequired(true),

        ];

        if($pageName === Crud::PAGE_INDEX){
            $fields [] = $avatarImage;
        }
        else{
            $fields [] = $avatarChoices;
        }

        return $fields;
    }
}
