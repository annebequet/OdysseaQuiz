<?php

namespace App\Controller\Admin;

use App\Entity\AnswerImage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AvatarField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AnswerImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AnswerImage::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        $image = ImageField::new('imageLink');
        $url = TextField::new('imageLink');
        $fields = [
                IdField::new('id')
                    ->onlyOnIndex(),
                TextField::new('value', 'Description'),
                $image->hideOnForm(),
                $url->onlyOnForms()
            ];
        
            if($pageName === Crud::PAGE_INDEX or $pageName === Crud::PAGE_DETAIL){
                $fields [] = $image;
            }
            else{
                $fields [] = $url;
            }

        return $fields;

    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
            return $action->setLabel('Créer une réponse(enfant)');
        });
    }
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Réponses(enfant)')
            ->setPageTitle('new', 'Ajouter une réponse(enfant)')
            ->setPageTitle('edit', 'Éditer une réponse(enfant)')
            ->setPageTitle('detail', 'Réponse(enfant)')
        ;
    }
}
