<?php

namespace App\Controller\Api;

use App\Repository\ScoreRepository;
use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * Get all the categories with leaderboards by environment for the curent user
     * @Route("/api/categories/{environmentId<\d+>}", name="api_categories_get", methods={"GET"})
     */
    public function findAllPodiums(CategoryRepository $categoryRepository, ScoreRepository $scoreRepository, $environmentId)
    {
        $user = $this->getUser();

        $categories = $categoryRepository->findAll();
        for ($categoryId=1; $categoryId <= count($categories) ; $categoryId++) { 
            $leaderboard = $scoreRepository->findLeaderboard($categoryId, $environmentId);
            $podium = $scoreRepository->findPodium($categoryId, $environmentId);
            $score = $scoreRepository->findRank($categoryId, $environmentId, $user);

            // final ranking array with rank number as index
            $ranks = [];
            $category = $categoryRepository->find($categoryId);
            $ranks['category'] = $category;

            for ($i = 0; $i < 3 ; $i++) {
                if (array_key_exists($i, $podium)) {
                    $ranks['scores'][$i+1] = $podium[$i];
                }
            }

            // check if the current user is already on the podium
            $currentUser = array_search($score, $podium);

            // find the rank of the current user in the leaderboard
            if (array_search($score, $leaderboard) !== false) {
                $currentRank = array_search($score, $leaderboard) +1;

                // if not, add him to the final ranking array with its current rank
                if ($currentUser == false) {
                    $ranks['scores'][$currentRank] = $score;
                }
            }
            $allPodiums[] = $ranks; 
        }
        return $this->json($allPodiums, 200, [], ['groups' => 'api_scores_get_one']);
    }
}
