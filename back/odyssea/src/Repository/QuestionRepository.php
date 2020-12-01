<?php

namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function findRandom($user, $environment, $category, $grade)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        $qb->addSelect('grades.grade');
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = :grade');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'grade' => $grade, 
            'category' => $category,
            'environment' => $environment,
            'user' => $user,
        ));


        $query = $qb->getQuery();
        return $query->getOneOrNullResult();
    }

    // /**
    //  * @return Question[] Returns an array of Question objects
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
    public function findOneBySomeField($value): ?Question
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
