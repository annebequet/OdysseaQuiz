<?php

namespace App\Repository;

use App\Entity\Score;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Score|null find($id, $lockMode = null, $lockVersion = null)
 * @method Score|null findOneBy(array $criteria, array $orderBy = null)
 * @method Score[]    findAll()
 * @method Score[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Score::class);
    }

    public function findLeaderboard($category, $environment)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT score, category, environment, user
                FROM App\Entity\Score AS score
                    LEFT JOIN score.category AS category
                    LEFT JOIN score.environment AS environment
                    LEFT JOIN score.user AS user
                WHERE category = :category AND environment = :environment
                ORDER BY score.score DESC, score.quizNb DESC'
        );
        $query
        ->setParameters(array(
            'category' => $category,
            'environment' => $environment
        ));

        // returns an array of Score objects
        return $query->getResult();
    }

    public function findPodium($category, $environment)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT score, category, environment, user
                FROM App\Entity\Score AS score
                    LEFT JOIN score.category AS category
                    LEFT JOIN score.environment AS environment
                    LEFT JOIN score.user AS user
                WHERE category = :category AND environment = :environment
                ORDER BY score.score DESC, score.quizNb DESC'
        );
        $query
        ->setMaxResults(3)
        ->setParameters(array(
            'category' => $category,
            'environment' => $environment
        ));

        // returns an array of Score objects
        return $query->getResult();
    }

    public function findRank($category, $environment, $user)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT score, category, environment, user
                FROM App\Entity\Score AS score
                    LEFT JOIN score.category AS category
                    LEFT JOIN score.environment AS environment
                    LEFT JOIN score.user AS user
                WHERE category = :category AND environment = :environment AND user = :user'
        );
        $query
        ->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        // returns an object Score
        return $query->getOneOrNullResult();
    }

    public function findRanking($environment)
    {
        return $this->createQueryBuilder('score')
                    ->from('App\Entity\Score', 'Score')
                    ->addSelect('user')
                    ->join('score.user', 'user')
                    ->join('score.environment', 'environment')
                    ->where('environment = :environment')
                    ->setParameter('environment', $environment)
                    ->orderBy('score.score', 'DESC')
                    ->getQuery()
                    ->getResult();
    }



    // /**
    //  * @return Score[] Returns an array of Score objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Score
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
