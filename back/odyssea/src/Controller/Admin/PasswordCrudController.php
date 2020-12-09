<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class PasswordCrudController extends AbstractCrudController
{
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        // Get the password from the form
        $password = $entityInstance->getPassword();

        // Encode it
        $encodedPassword = $this->passwordEncoder->encodePassword($entityInstance, trim($password));

        // Set it, persist and flush
        $entityInstance->setPassword($encodedPassword);
        $entityManager->persist($entityInstance);
        $entityManager->flush();
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
            ->setPageTitle('edit', 'Éditer un mot de passe')
            // ->setPageTitle('detail', 'Mot de passe')
        ;
    }
}
