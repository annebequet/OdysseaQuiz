<?php

namespace App\Repository;

use App\Entity\GradeAdult;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GradeAdult|null find($id, $lockMode = null, $lockVersion = null)
 * @method GradeAdult|null findOneBy(array $criteria, array $orderBy = null)
 * @method GradeAdult[]    findAll()
 * @method GradeAdult[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GradeAdultRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GradeAdult::class);
    }

    // /**
    //  * @return GradeAdult[] Returns an array of GradeAdult objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GradeAdult
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
