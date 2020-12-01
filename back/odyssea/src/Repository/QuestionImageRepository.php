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
