<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
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
        $avatarImage = AvatarField::new('imageUrl');

        $avatarChoices = AssociationField:: new('avatar');

        $mdpCreate = TextField::new('password', 'Mot de passe')
            ->setFormType(PasswordType::class)
            ->setFormTypeOption('empty_data', '')
            ->onlyWhenCreating();

        $mdpUpdate = TextField::new('password', 'Mot de passe')
            ->setFormTypeOptions([
                'mapped' => false
            ])
            ->setRequired(false)
            ->hideOnForm()
            ->hideOnIndex();

        $fields = [
            $avatarImage->onlyOnIndex(),
            IdField::new('id')->onlyOnIndex(),
            EmailField::new('email'),
            $mdpCreate,
            TextField::new('pseudo'),
            TextField::new('first_name', 'Prénom'),
            TextField::new('last_name', 'Nom'),
            $avatarChoices->onlyOnForms(),
            ChoiceField::new('roles', 'Rôles')
                ->setChoices([
                        'Admin' => 'ROLE_ADMIN',
                        'User' => 'ROLE_USER'
                ])
                ->allowMultipleChoices(),
            AssociationField::new('environment', 'Environnement')
                ->setRequired(true),

        ];

        if($pageName === Crud::PAGE_INDEX){
            $fields [] = $avatarImage;
        }
        if($pageName === Crud::PAGE_NEW){
            $fields [] = $avatarImage;
            $fields [] = $mdpCreate;
        }
        else{
            $fields [] = $avatarChoices;
            $fields [] = $mdpUpdate;
        }

        return $fields;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
            return $action->setLabel('Créer un utilisateur');
        });
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Utilisateurs')
            ->setPageTitle('new', 'Ajouter un utilisateur')
            ->setPageTitle('edit', 'Éditer un utilisateur')
            ->setPageTitle('detail', 'Utilisateur')
        ;
    }
}
