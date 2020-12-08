<?php

namespace App\Repository;

use App\Entity\QuestionImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionImage[]    findAll()
 * @method QuestionImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionImage::class);
    }

    public function findTenRandom($environment, $category)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(10);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment
        ));

        $query = $qb->getQuery();
        return $query->getResult();
    }

    public function findMultiplesRandom($user, $environment, $category, $session)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeKids', 'grades');
        //$qb->addSelect('grades.grade');
        //$qb->addSelect('grades.deck'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('CAST(grades.deck as char) LIKE :session');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(10);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user,
            'session' => '%'.$session.'%'
        ));

        $query = $qb->getQuery();
        return $query->getResult();
    }

    public function findRandom($user, $environment, $category, $grade, $limit)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeKids', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = :grade');
        $qb->orderBy('RAND()');
        $qb->setMaxResults($limit);
        $qb->setParameters(array(
            'grade' => $grade, 
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query = $qb->getQuery();
        return $query->getResult();
    }

    // /**
    //  * @return QuestionImage[] Returns an array of QuestionImage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?QuestionImage
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
