<?php

namespace App\Controller\Admin;

use App\Entity\Score;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ScoreCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Score::class;
    }

    public function configureFields(string $pageName): iterable
    {
        
        $fields = [
            IdField::new('id')
                ->onlyOnIndex(),
            $username = TextField:: new('pseudo', 'Joueur'),
            AssociationField::new('user', 'Email'),
            IntegerField::new('Score', 'Score moyen'),
            IntegerField::new('quizNb', 'Nb de quiz joués'),
            IntegerField::new('points', 'Total de pts cumulés'),
            AssociationField::new('category', 'Catégorie'),
            AssociationField::new('environment', 'Environnement'),
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
            ->setPageTitle('index', 'Scores')
            // ->setPageTitle('new', 'Score')
            // ->setPageTitle('edit', 'Score')
            // ->setPageTitle('detail', 'Score')
        ;
    }
}
