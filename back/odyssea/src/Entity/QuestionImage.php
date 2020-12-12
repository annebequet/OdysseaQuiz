<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\QuestionImageRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=QuestionImageRepository::class)
 * @UniqueEntity(
 *      fields = "name",
 *      message = "{{ value }} est déjà utilisé"
 * )
 * @UniqueEntity(
 *      fields = "title",
 *      message = "Cette question est déjà posée"
 * )
 */
class QuestionImage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_questionImages_get")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("api_questionImages_get")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_questionImages_get")
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
     * @Groups("api_questionImages_get")
     * @Assert\NotBlank(
     *      message = "Veuillez poser une question"
     * )
     */
    private $title;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="questionImages")
     * @Assert\NotBlank(
     *      message = "Veuillez sélectionner une catégorie"
     * )
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="questionImages")
     */
    private $environment;

    /**
     * @ORM\OneToMany(targetEntity=GradeKid::class, mappedBy="question", orphanRemoval=true)
     */
    private $gradeKids;

    /**
     * @ORM\ManyToMany(targetEntity=AnswerImage::class, inversedBy="questionImages")
     * @Groups("api_questionImages_get")
     * Assert\Count(
     *      min = 4, 
     *      max = 4
     * )
     */
    private $choices;

    /**
     * @ORM\ManyToOne(targetEntity=AnswerImage::class)
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotBlank(
     *      message = "Veuillez sélectionner la bonne réponse"
     * )
     */
    private $correctAnswerObject;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("api_questionImages_get")
     */
    private $correctAnswer;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->choices = new ArrayCollection();
        $this->gradeKids = new ArrayCollection();
        $this->type = "imagepicker";
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

    public function __toString()
    {
        return (string) $this->title;
    }

    /**
     * @return Collection|GradeKid[]
     */
    public function getGradeKids(): Collection
    {
        return $this->gradeKids;
    }

    public function addGradeKid(GradeKid $gradeKid): self
    {
        if (!$this->gradeKids->contains($gradeKid)) {
            $this->gradeKids[] = $gradeKid;
            $gradeKid->setQuestion($this);
        }

        return $this;
    }

    public function removeGradeKid(GradeKid $gradeKid): self
    {
        if ($this->gradeKids->contains($gradeKid)) {
            $this->gradeKids->removeElement($gradeKid);
            // set the owning side to null (unless already changed)
            if ($gradeKid->getQuestion() === $this) {
                $gradeKid->setQuestion(null);
            }
        }

        return $this;
    }

    public function getCorrectAnswerObject(): ?AnswerImage
    {
        return $this->correctAnswerObject;
    }

    public function setCorrectAnswerObject(?AnswerImage $correctAnswerObject): self
    {
        $this->correctAnswerObject = $correctAnswerObject;

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

    /**
     * @return Collection|AnswerImage[]
     */
    public function getChoices(): Collection
    {
        return $this->choices;
    }

    public function addChoice(AnswerImage $choice): self
    {
        if (!$this->choices->contains($choice)) {
            $this->choices[] = $choice;
        }

        return $this;
    }

    public function removeChoice(AnswerImage $choice): self
    {
        if ($this->choices->contains($choice)) {
            $this->choices->removeElement($choice);
        }

        return $this;
    }

    public function getChoicesValues()
    {
        return $this->choices->getValues();
    }
}
