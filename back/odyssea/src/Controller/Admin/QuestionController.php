<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuestionController extends AbstractController
{

    /**
     * @Route("/admin/question/browse", name="admin_question_browse", methods={"GET"})
     * 
     */
    public function browse(QuestionRepository $questionRepo)
    {
        // get the list of all questions
        $questions = $questionRepo->findAll();
        // send it to the view
        return $this->render('admin/Question/browse.html.twig', [
            'question_list' => $questions,
        ]);
    }

    /**
     * @Route("/admin/Question/read/{id}", name="admin_question_read", methods={"GET"}, requirements={"id"="\d+"})
     * 
     */
    public function read(QuestionRepository $questionRepo, $id)
    {
        //récupérer l'objet Question, c'est fait par le Kernel de Symfony
        $Question = $questionRepo->findQuestionWithAllInfos($id);
        // $question = $questionRepo->find($id);

        if (is_null($question)) {
            throw $this->createNotFoundException('Ce question n\'existe pas');
        }
        // le passe au template 
        return $this->render('admin/question/read.html.twig', [
            'question' => $question
        ]);
    }

    /**
     * @Route("/admin/question/edit/{id}", name="admin_question_edit", methods={"POST", "GET"}, requirements={"id"="\d+"})
     * 
     */
    public function edit(Question $question, Request $request, Limace $slugger)
    {
        // récupérer le form et lui fournir l'objet question
        $form = $this->createForm(QuestionType::class, $question);
       
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            // Pour enregistrer l'objet en BDD
            // On récupère un entityManager
            $em = $this->getDoctrine()->getManager();

            // On modifie le slug à partir du nouveau titre
            //* On modifie une URL !
            // @todo : gestion des redirections 301 d'URL
            //$question->setSlug($slugger->slugify($question->getTitle()));

            //* Le slug est maintenant modifié via QuestionListener

            $em->persist($question);

            $em->flush();

            // @TODO : gérer les messages flash
            $this->addFlash('succcess', 'Film modifié');

            // rediriger sur le read
            return $this->redirectToRoute('admin_question_read', ['id' => $question->getId()]);
        }

        return $this->render('admin/question/edit.html.twig', [
            'question' => $question,
            'form_question' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/question/add", name="admin_question_add", methods={"POST", "GET"})
     * 
     */
    public function add(Request $request)
    {
        // Notre nouveau question
        $question = new Question();
        // récupérer le form et lui fournir l'objet question
        $form = $this->createForm(QuestionType::class, $question, [
            // https://symfony.com/doc/current/reference/forms/types/form.html#attr
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
       
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Pour enregistrer l'objet en BDD
            // On récupère un entityManager
            $em = $this->getDoctrine()->getManager();

            // on récupère le $question avec les donnés modifiées
            //$question = $form->getData();
            
            // On crée le slug à partir du titre
            // $question->setSlug($slugger->slugify($question->getTitle()));
            
            //* Le slug est maintenant modifié via QuestionListener
            
            $em->persist($question);

            $em->flush();

            // @TODO : gérer les messages flash
            $this->addFlash('succcess', 'Film ajouté');

            // rediriger sur le read
            return $this->redirectToRoute('admin_question_read', ['id' => $question->getId()]);
        }
        
        return $this->render('admin/question/add.html.twig', [
            'form_question' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/question/delete/{id}", name="admin_question_delete", methods={"GET"}, requirements={"id"="\d+"})
     * 
     */
    public function delete(Question $question, EntityManagerInterface $em)
    {
        $em->remove($question);
        $em->flush();

        $this->addFlash('success', 'Question supprimée');

        return $this->redirectToRoute('admin_question_browse');

    }


}
