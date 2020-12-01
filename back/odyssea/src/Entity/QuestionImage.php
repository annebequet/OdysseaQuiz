<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\QuestionImageRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=QuestionImageRepository::class)
 */
class QuestionImage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("get_questImage_by_cat")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("get_questImage_by_cat")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("get_questImage_by_cat")
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups({"questions_image_get_one", "get_questImage_by_cat"})
     */
    private $title;

    /**
     * @ORM\OneToMany(targetEntity=AnswerImage::class, mappedBy="questionImage")
     * @Groups({"questions_image_get_one", "get_questImage_by_cat"})
     */
    private $choices;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=AnswerImage::class, inversedBy="isTheCorrectAnswerOf")
     * @Groups({"questions_image_get_one", "get_questImage_by_cat"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $correct_answer;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="questionImages")
     * @Groups({"questions_image_get_one", "get_questImage_by_cat"})
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="questionImages")
     * @Groups({"questions_image_get_one", "get_questImage_by_cat"})
     */
    private $environment;

    /**
     * @ORM\OneToMany(targetEntity=GradeKid::class, mappedBy="question", orphanRemoval=true)
     */
    private $gradeKids;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->choices = new ArrayCollection();
        $this->gradeKids = new ArrayCollection();
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
            $choice->setQuestionImage($this);
        }

        return $this;
    }

    public function removeChoice(AnswerImage $choice): self
    {
        if ($this->choices->contains($choice)) {
            $this->choices->removeElement($choice);
            // set the owning side to null (unless already changed)
            if ($choice->getQuestionImage() === $this) {
                $choice->setQuestionImage(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return (string) $this->title;
    }

    public function getCorrectAnswer(): ?AnswerImage
    {
        return $this->correct_answer;
    }

    public function setCorrectAnswer(?AnswerImage $correct_answer): self
    {
        $this->correct_answer = $correct_answer;

        return $this;
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
}
