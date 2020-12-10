<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\EnvironmentRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=EnvironmentRepository::class)
 * @UniqueEntity(
 *      fields = "name",
 *      message = "{{ value }} est déjà utilisé."
 * )
 */
class Environment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_users_get_one")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"api_users_get_one", "api_categories_get"})
     * @Assert\Length(
     *      max = 12,
     *      maxMessage = "Le nom est trop long, merci d'en choisir un autre.",
     *      allowEmptyString = false
     * )
     * @Assert\NotBlank(
     *      message = "Veuillez saisir un nom d'environnement"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="environment")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity=Question::class, mappedBy="environment")
     */
    private $questions;

    /**
     * @ORM\OneToMany(targetEntity=Score::class, mappedBy="environment")
     */
    private $scores;

    /**
     * @ORM\OneToMany(targetEntity=QuestionImage::class, mappedBy="environment")
     */
    private $questionImages;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->scores = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->questionImages = new ArrayCollection();
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
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setEnvironment($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getEnvironment() === $this) {
                $user->setEnvironment(null);
            }
        }

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
            $question->setEnvironment($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->contains($question)) {
            $this->questions->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getEnvironment() === $this) {
                $question->setEnvironment(null);
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
            $score->setEnvironment($this);
        }

        return $this;
    }

    public function removeScore(Score $score): self
    {
        if ($this->scores->contains($score)) {
            $this->scores->removeElement($score);
            // set the owning side to null (unless already changed)
            if ($score->getEnvironment() === $this) {
                $score->setEnvironment(null);
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
            $questionImage->setEnvironment($this);
        }

        return $this;
    }

    public function removeQuestionImage(QuestionImage $questionImage): self
    {
        if ($this->questionImages->contains($questionImage)) {
            $this->questionImages->removeElement($questionImage);
            // set the owning side to null (unless already changed)
            if ($questionImage->getEnvironment() === $this) {
                $questionImage->setEnvironment(null);
            }
        }

        return $this;
    }
}