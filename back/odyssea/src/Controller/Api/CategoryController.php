<?php

namespace App\Controller\Api;

use App\Repository\ScoreRepository;
use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * Get all the categories by environment with leaderbaords
     * 
     * @Route("/api/categories/{environmentId<\d+>}", name="api_categories_get", methods={"GET"})
     */
    public function findAllPodiums(CategoryRepository $categoryRepository, ScoreRepository $scoreRepository, $environmentId)
    {
        // Get the current User
        $user = $this->getUser();

        // Get all Categories
        $categories = $categoryRepository->findAll();
        for ($categoryId=1; $categoryId <= count($categories) ; $categoryId++) { 
            // Get the leaderboard 
            $leaderboard = $scoreRepository->findLeaderboard($categoryId, $environmentId);
            // Get the 3 best players
            $podium = $scoreRepository->findPodium($categoryId, $environmentId);
            // Get the Score of the current User
            $score = $scoreRepository->findRank($categoryId, $environmentId, $user);

            // Final ranking array with rank number as index
            $ranks = [];
            // Insert the Category information
            $category = $categoryRepository->find($categoryId);
            $ranks['category'] = $category;

            // If there is a player at the rank, insert the information to the array
            for ($i = 0; $i < 3 ; $i++) {
                if (array_key_exists($i, $podium)) {
                    $ranks['scores'][$i+1] = $podium[$i];
                }
            }

            // Check if the current User is already on the podium
            $currentUser = array_search($score, $podium);

            // Find the rank of the current User in the leaderboard
            if (array_search($score, $leaderboard) !== false) {
                $currentRank = array_search($score, $leaderboard) +1;

                // If not, insert to the final ranking array with its current rank
                if ($currentUser == false) {
                    $ranks['scores'][$currentRank] = $score;
                }
            }
            $allPodiums[] = $ranks; 
        }
        return $this->json($allPodiums, 200, [], ['groups' => 'api_categories_get']);
    }
}
