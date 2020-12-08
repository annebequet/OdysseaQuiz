<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AnswerImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Collection;

/**
 * @ORM\Entity(repositoryClass=AnswerImageRepository::class)
 */
class AnswerImage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"get_questImage_by_cat"})
     */
    private $value;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"get_questImage_by_cat"})
     */
    private $imageLink;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=QuestionImage::class, inversedBy="choices")
     * @ORM\JoinColumn(nullable=true)
     */
    private $questionImage;

    /**
     * @ORM\OneToMany(targetEntity=QuestionImage::class, mappedBy="correctAnswer")
     */
    private $isTheCorrectAnswerOf;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->isTheCorrectAnswerOf = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getImageLink(): ?string
    {
        return $this->imageLink;
    }

    public function setImageLink(string $imageLink): self
    {
        $this->imageLink = $imageLink;

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

    public function getQuestionImage(): ?QuestionImage
    {
        return $this->questionImage;
    }

    public function setQuestionImage(?QuestionImage $questionImage): self
    {
        $this->questionImage = $questionImage;

        return $this;
    }

    public function __toString()
    {
        return (string) $this->value;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|QuestionImage[]
     */
    public function getIsTheCorrectAnswerOf(): \Doctrine\Common\Collections\Collection
    {
        return $this->isTheCorrectAnswerOf;
    }

    public function addIsTheCorrectAnswerOf(QuestionImage $isTheCorrectAnswerOf): self
    {
        if (!$this->isTheCorrectAnswerOf->contains($isTheCorrectAnswerOf)) {
            $this->isTheCorrectAnswerOf[] = $isTheCorrectAnswerOf;
            $isTheCorrectAnswerOf->setCorrectAnswer($this);
        }

        return $this;
    }

    public function removeIsTheCorrectAnswerOf(QuestionImage $isTheCorrectAnswerOf): self
    {
        if ($this->isTheCorrectAnswerOf->contains($isTheCorrectAnswerOf)) {
            $this->isTheCorrectAnswerOf->removeElement($isTheCorrectAnswerOf);
            // set the owning side to null (unless already changed)
            if ($isTheCorrectAnswerOf->getCorrectAnswer() === $this) {
                $isTheCorrectAnswerOf->setCorrectAnswer(null);
            }
        }

        return $this;
    }
}
