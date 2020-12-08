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

    public function findOneRandom($user, $environment, $category, $grade)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
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
            'user' => $user
        ));

        $query = $qb->getQuery();
        return $query->getOneOrNullResult();
    }

    public function findRandom($user, $environment, $category, $grade, $limit)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
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

    public function findMultiplesRandom($user, $environment, $category)
    {   
        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 0');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query0 = $qb->getQuery();
        $query0 = $query0->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 0');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(3);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query1 = $qb->getQuery();
        $query1 = $query1->getResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 1');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(2);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query2 = $qb->getQuery();
        $query2 = $query2->getResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 1');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query3 = $qb->getQuery();
        $query3 = $query3->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 1');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query4 = $qb->getQuery();
        $query4 = $query4->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 2');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query5 = $qb->getQuery();
        $query5 = $query5->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 2');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query6 = $qb->getQuery();
        $query6 = $query6->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 3');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query7 = $qb->getQuery();
        $query7 = $query7->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 4');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query8 = $qb->getQuery();
        $query8 = $query8->getOneOrNullResult();

        $qb = $this->createQueryBuilder('question');
        $qb->leftJoin('question.gradeAdults', 'grades');
        //$qb->addSelect('grades.grade'); // To delete to get good json format
        $qb->where('grades.user = :user');
        $qb->andWhere('question.category = :category');
        $qb->andWhere('question.environment = :environment');
        $qb->andWhere('grades.grade = 5');
        $qb->orderBy('RAND()');
        $qb->setMaxResults(1);
        $qb->setParameters(array(
            'category' => $category,
            'environment' => $environment,
            'user' => $user
        ));

        $query9 = $qb->getQuery();
        $query9 = $query9->getOneOrNullResult();

        return [
            $query0,
            $query1,
            $query2,
            $query3,
            $query4,
            $query5,
            $query6,
            $query7,
            $query8,
            $query9
        ];
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
