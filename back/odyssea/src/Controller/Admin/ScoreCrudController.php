<?php

namespace App\Controller\Admin;

use App\Entity\Score;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ScoreCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Score::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */

    
    public function configureActions(Actions $actions): Actions
    {
    return $actions
        // this will forbid to create or delete entities in the backend
        ->disable(Action::NEW, Action::DELETE);
        ->disable(Action::NEW, Action::DELETE);
    }

}
