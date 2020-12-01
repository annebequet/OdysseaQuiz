<?php

namespace App\Controller\Admin;

use App\Entity\AnswerImage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AnswerImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AnswerImage::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            TextField::new('value'),
            TextField::new('imageLink')
                ->hideOnIndex(),
            AssociationField::new('questionImage', 'Est associée à la question')
                ->hideOnForm()
        ];
    }
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Réponses')
            ->setPageTitle('new', 'Réponse')
            ->setPageTitle('edit', 'Réponse')
            ->setPageTitle('detail', 'Réponse')
        ;
    }
}
