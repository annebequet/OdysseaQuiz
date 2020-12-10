<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=QuestionRepository::class)
 * @UniqueEntity(
 *      fields = "name",
 *      message = "{{ value }} est déjà utilisé"
 * )
 * @UniqueEntity(
 *      fields = "title",
 *      message = "Cette question est déjà posée"
 * )
 */
class Question
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_questions_get")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("api_questions_get")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_questions_get")
     * @Assert\NotBlank(
     *      message = "Veuillez définir un slug pour identifier la question"
     * )
     * @Assert\Regex(
     *     pattern = "/^[a-z]+(?:-[a-z]+)*$/",
     *     message = "N'utilisez que des lettres minuscules et des tirets (ex : baleine-en-chocolat)"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups("api_questions_get")
     * @Assert\NotBlank(
     *      message = "Veuillez poser une question"
     * )
     */
    private $title;

    /**
     * @ORM\Column(type="json")
     * @Groups("api_questions_get")
     * @Assert\Count(min=4, max=4)
     */
    private $choices = [];

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_questions_get")
     * @Assert\NotBlank(
     *      message = "Veuillez recopier la bonne réponse"
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
     * @Assert\NotBlank(
     *      message = "Veuillez selectionner une catégorie"
     * )
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="questions")
     * @Groups("categories_get_one")
     */
    private $environment;

    /**
     * @ORM\OneToMany(targetEntity=GradeAdult::class, mappedBy="question", orphanRemoval=true)
     */
    private $gradeAdults;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->gradeAdults = new ArrayCollection();
        $this->type = "radiogroup";
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

    /**
     * @return Collection|GradeAdult[]
     */
    public function getGradeAdults(): Collection
    {
        return $this->gradeAdults;
    }

    public function addGradeAdult(GradeAdult $gradeAdult): self
    {
        if (!$this->gradeAdults->contains($gradeAdult)) {
            $this->gradeAdults[] = $gradeAdult;
            $gradeAdult->setQuestion($this);
        }

        return $this;
    }

    public function removeGradeAdult(GradeAdult $gradeAdult): self
    {
        if ($this->gradeAdults->contains($gradeAdult)) {
            $this->gradeAdults->removeElement($gradeAdult);
            // set the owning side to null (unless already changed)
            if ($gradeAdult->getQuestion() === $this) {
                $gradeAdult->setQuestion(null);
            }
        }

        return $this;
    }
}