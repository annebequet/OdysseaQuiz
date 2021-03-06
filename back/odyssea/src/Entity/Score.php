<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ScoreRepository;
use Symfony\Component\Validator\Constraints\Range;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=ScoreRepository::class)
 */
class Score
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $quizNb;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $points;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"api_users_get_one", "api_categories_get"})
     * @Assert\Range(
     *      min = "0",
     *      max = "100",
     *      notInRangeMessage = "Le score doit se situer entre {{ min }} et {{ max }} (valeur actuelle : {{ value }})."
     * )
     */
    private $score;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="scores")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("api_categories_get")
     * @Assert\NotNull
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="scores")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("api_users_get_one")
     * @Assert\NotNull
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="scores")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("api_users_get_one")
     * @Assert\NotNull
     */
    private $environment;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $session;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuizNb(): ?int
    {
        return $this->quizNb;
    }

    public function setQuizNb(?int $quizNb): self
    {
        $this->quizNb = $quizNb;

        return $this;
    }

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(?int $points): self
    {
        $this->points = $points;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getEnvironment(): ?Environment
    {
        return $this->environment;
    }

    public function setEnvironment(?Environment $environment): self
    {
        $this->environment = $environment;

        return $this;
    }

    public function getPseudo()
    {
        return $this->user->getPseudo();
    }

    public function getSession(): ?int
    {
        return $this->session;
    }

    public function setSession(?int $session): self
    {
        $this->session = $session;

        return $this;
    }
}