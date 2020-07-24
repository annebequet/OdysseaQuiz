<?php

namespace App\Repository;

use App\Entity\Environment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Environment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Environment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Environment[]    findAll()
 * @method Environment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EnvironmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Environment::class);
    }

    // /**
    //  * @return Environment[] Returns an array of Environment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Environment
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
