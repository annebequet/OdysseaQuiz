<?php

namespace App\Controller\Admin;


use App\Entity\Score;
use App\Entity\Gallery;
use App\Entity\Category;
use App\Entity\Question;
use App\Entity\Environment;
use App\Controller\Admin\UserCrudController;
use App\Entity\QuestionImage;
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
            ->setTitle('Odyssea')
            ->setFaviconPath('https://icon-icons.com/icons2/519/PNG/128/jellyfish_icon-icons.com_51220.png');
    }

    public function configureMenuItems(): iterable
    {
        return [
        yield MenuItem::linktoDashboard('Utilisateurs', 'fas fa-users'),
        yield MenuItem::linkToCrud('Mots de passe', 'fas fa-key', User::class)
            ->setController(PasswordCrudController::class),
        yield MenuItem::linkToCrud('Avatars', 'fa fa-picture-o', Gallery::class),
        yield MenuItem::linkToCrud('Questions', 'fa fa-question-circle', Question::class),
        yield MenuItem::linkToCrud('Questions Image', 'fa fa-question-circle', QuestionImage::class),
        yield MenuItem::linkToCrud('Réponses Image', 'fa fa-images', AnswerImage::class)
            ->setController(AnswerImageCrudController::class),
        yield MenuItem::linkToCrud('Scores', 'fas fa-star-half-alt', Score::class),
        yield MenuItem::linkToCrud('Environnement', 'fab fa-etsy', Environment::class),
        yield MenuItem::linkToCrud('Catégories', 'fab fa-cuttlefish', Category::class),
        yield MenuItem::linkToUrl('Home', 'fa fa-home','http://54.226.34.31/')
        // MenuItem::linkToLogout('Logout', 'fa fa-exit'),
        ];
    }
}
