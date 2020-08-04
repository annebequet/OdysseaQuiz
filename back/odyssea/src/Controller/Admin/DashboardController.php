<?php

namespace App\Controller\Admin;


use App\Entity\Question;
use App\Entity\Category;
use App\Controller\Admin\UserCrudController;
use App\Entity\Gallery;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {

        // redirect to some CRUD controller
        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();

        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());

        // you can also redirect to different pages depending on the current user
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // you can also render some template to display a proper Dashboard
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        // return $this->render('some/path/my-dashboard.html.twig');


        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Odyssea');
    }

    public function configureMenuItems(): iterable
    {
        return [
        yield MenuItem::linktoDashboard('Tableau de bord', 'fa fa-home'),
        yield MenuItem::linkToCrud('Questions', 'fa fa-question-circle', Question::class),
        yield MenuItem::linkToCrud('Catégories', 'fas fa-fish', Category::class),
        yield MenuItem::linkToCrud('Avatars', 'fa fa-picture-o', Gallery::class)
        // MenuItem::linkToLogout('Logout', 'fa fa-exit'),
        ];
    }
}
