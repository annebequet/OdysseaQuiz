<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use App\Form\Admin\QuestionType;
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
    public function browse(QuestionRepository $questionRepository)
    {
        // get the list of all questions
        $questions = $questionRepository->findAll();
        // send it to the view
        return $this->render('admin/question/browse.html.twig', [
            'question_list' => $questions,
        ]);
    }

    /**
     * @Route("/admin/Question/read/{id}", name="admin_question_read", methods={"GET"}, requirements={"id"="\d+"})
     * 
     */
    public function read(QuestionRepository $questionRepo, $id)
    {
        // get one question
        $question = $questionRepo->find($id);
        // send an error if not found
        if (is_null($question)) {
            throw $this->createNotFoundException('Cette question n\'existe pas');
        }
        // send it to the view
        return $this->render('admin/question/read.html.twig', [
            'question' => $question
        ]);
    }

    /**
     * @Route("/admin/question/add", name="admin_question_add", methods={"POST", "GET"})
     * 
     */
    public function add(Request $request)
    {
        // create a new question
        $question = new Question();
        
        // get the form
        $form = $this->createForm(QuestionType::class, $question);
       
        $form->handleRequest($request);
        
        // if the form is submitted and valid, add it to the database via the entity manager
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();            
            $em->persist($question);
            $em->flush();

            // TODO : gérer les messages flash
            $this->addFlash('succcess', 'Film ajouté');

            // redirect to the details page
            return $this->redirectToRoute('admin_question_read', ['id' => $question->getId()]);
        }
        
        // if not submitted yet, just display the form page
        return $this->render('admin/question/add.html.twig', [
            'form_question' => $form->createView(),
        ]);
    }


    /**
     * @Route("/admin/question/edit/{id}", name="admin_question_edit", methods={"POST", "GET"}, requirements={"id"="\d+"})
     * 
     */
    public function edit(Question $question, Request $request)
    {
        // get the Question Form
        $form = $this->createForm(QuestionType::class, $question);
       
        $form->handleRequest($request);
        
        // if the form is submitted and valid, add it to the database via the entity manager
        if ($form->isSubmitted() && $form->isValid())
        {
            $em = $this->getDoctrine()->getManager();
            $em->persist($question);
            $em->flush();

            // TODO : gérer les messages flash
            $this->addFlash('succcess', 'Film modifié');

            // redirect to the details page
            return $this->redirectToRoute('admin_question_read', ['id' => $question->getId()]);
        }

        // if not submitted yet, just display the form page with pre-filled infos
        return $this->render('admin/question/edit.html.twig', [
            'question' => $question,
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
