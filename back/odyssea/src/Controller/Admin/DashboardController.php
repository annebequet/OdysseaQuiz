<?php

namespace App\Controller\Admin;


use App\Entity\Score;
use App\Entity\Gallery;
use App\Entity\Category;
use App\Entity\Question;
use App\Entity\Environment;
use App\Controller\Admin\UserCrudController;
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
        yield MenuItem::linktoDashboard('Tableau de bord', 'fas fa-dharmachakra'),
        yield MenuItem::linkToCrud('Mots de passe', 'fas fa-key', User::class)
            ->setController(PasswordCrudController::class),
        yield MenuItem::linkToCrud('Questions', 'fa fa-question-circle', Question::class),
        yield MenuItem::linkToCrud('Catégories', 'fas fa-fish', Category::class),
        yield MenuItem::linkToCrud('Avatars', 'fa fa-picture-o', Gallery::class),
        yield MenuItem::linkToCrud('Environnement', 'fab fa-pagelines', Environment::class),
        yield MenuItem::linkToCrud('Scores', 'fas fa-anchor', Score::class),
        yield MenuItem::linkToUrl('Home', 'fa fa-home','http://localhost:8080')
        // MenuItem::linkToLogout('Logout', 'fa fa-exit'),
        ];
    }
}
