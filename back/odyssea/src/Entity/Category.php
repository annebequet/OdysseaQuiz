<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 * @UniqueEntity(
 *      fields = "name",
 *      message = "{{ value }} est déjà utilisé."
 * )
 * @UniqueEntity(
 *      fields = "picture",
 *      message = "L'image {{ value }} est déjà utilisée."
 * )
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_users_get_one")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Groups({"api_users_get_one", "api_categories_get"})
     * @Assert\Length(
     *      max = 12,
     *      maxMessage = "Le nom de la catégorie est trop long, merci d'en choisir un autre.",
     *      allowEmptyString = false
     * )
     * @Assert\NotBlank(
     *      message = "Veuillez saisir un nom"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=2000)
     * @Groups({"api_users_get_one", "api_categories_get"})
     * @Assert\Url(
     *    message = "L'url '{{ value }}' n'est pas valide.",
     * )
     * @Assert\NotBlank(
     *      message = "Veuillez saisir l'URL de l'image"
     * )
     */
    private $picture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Question::class, mappedBy="category")
     */
    private $questions;

    /**
     * @ORM\OneToMany(targetEntity=QuestionImage::class, mappedBy="category")
     */
    private $questionImages;

    /**
     * @ORM\OneToMany(targetEntity=Score::class, mappedBy="category")
     */
    private $scores;

    public function __construct()
    {
        $this->questions = new ArrayCollection();
        $this->questionImages = new ArrayCollection();
        $this->scores = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

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

    /**
     * @return Collection|Question[]
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions[] = $question;
            $question->setCategory($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->contains($question)) {
            $this->questions->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getCategory() === $this) {
                $question->setCategory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Score[]
     */
    public function getScores(): Collection
    {
        return $this->scores;
    }

    public function addScore(Score $score): self
    {
        if (!$this->scores->contains($score)) {
            $this->scores[] = $score;
            $score->setCategory($this);
        }

        return $this;
    }

    public function removeScore(Score $score): self
    {
        if ($this->scores->contains($score)) {
            $this->scores->removeElement($score);
            // set the owning side to null (unless already changed)
            if ($score->getCategory() === $this) {
                $score->setCategory(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * @return Collection|QuestionImage[]
     */
    public function getQuestionImages(): Collection
    {
        return $this->questionImages;
    }

    public function addQuestionImage(QuestionImage $questionImage): self
    {
        if (!$this->questionImages->contains($questionImage)) {
            $this->questionImages[] = $questionImage;
            $questionImage->setCategory($this);
        }

        return $this;
    }

    public function removeQuestionImage(QuestionImage $questionImage): self
    {
        if ($this->questionImages->contains($questionImage)) {
            $this->questionImages->removeElement($questionImage);
            // set the owning side to null (unless already changed)
            if ($questionImage->getCategory() === $this) {
                $questionImage->setCategory(null);
            }
        }

        return $this;
    }
}