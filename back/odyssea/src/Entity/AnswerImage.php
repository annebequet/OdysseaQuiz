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
     * @ORM\Column(type="string", length=8000)
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

    public function __construct()
    {
        $this->createdAt = new \DateTime();
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
}