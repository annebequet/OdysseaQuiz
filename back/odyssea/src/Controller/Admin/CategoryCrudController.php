<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AvatarField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            TextField::new('name', 'Nom'),
            AvatarField::new('picture', 'Image'),
            // https://q-cf.bstatic.com/images/hotel/max1024x768/249/249219414.jpg
        ];
    }

    //! debug : trouver le moyen de paramétrer %entity_label_plural% (et "singular?") permettrai d'enlever cette fonction et probablement modifier automatiquement le bouton create ?
    // the visible title at the top of the page and the content of the <title> element
    // it can include these placeholders: %entity_id%, %entity_label_singular%, %entity_label_plural%
    //->setPageTitle('index', '%entity_label_plural% listing')
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Catégories')
            ->setPageTitle('new', 'Catégorie')
            ->setPageTitle('edit', 'Catégorie')
            ->setPageTitle('detail', 'Catégorie')
        ;
    }
}
