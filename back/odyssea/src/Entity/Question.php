<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=QuestionRepository::class)
 */
class Question
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     * @Assert\NotBlank(
     *      message = "Vous devez sélectionner le type de la question."
     * )
     */
    private $type;

    //! dans blank normalizer = 'trim',
    //! sa march pas
    //! forcer le minuscule + l'absence d'espace
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     * @Assert\NotBlank(
     *      message = "Vous devez rentrer un slug pour identifier la question."
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     * @Assert\NotBlank(
     *      message = "Vous devez poser une question."
     * )
     */
    private $title;

    //! dans blank normalizer = 'trim',
    //! sa march pas
    /**
     * @ORM\Column(type="json")
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     * @Assert\NotBlank(
     *      message = "Vous devez entrer plusieurs choix."
     * )
     */
    private $choices = [];

    //! dans blank normalizer = 'trim',
    //! sa march pas
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"categories_get_one", "get_quest_by_cat"})
     * @Assert\NotBlank(
     *      message = "Vous devez copier la bonne réponse dans ce champs."
     * )
     */
    private $correctAnswer;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="questions")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="questions")
     * @Groups("categories_get_one")
     */
    private $environment;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getChoices(): ?array
    {
        return $this->choices;
    }

    public function setChoices(array $choices): self
    {
        $this->choices = $choices;

        return $this;
    }

    public function getCorrectAnswer(): ?string
    {
        return $this->correctAnswer;
    }

    public function setCorrectAnswer(string $correctAnswer): self
    {
        $this->correctAnswer = $correctAnswer;

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
}
