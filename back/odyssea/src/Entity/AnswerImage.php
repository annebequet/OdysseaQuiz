<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AnswerImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Groups("api_questionImages_get")
     * @Assert\NotBlank(
     *      message = "Veuillez saisir une description courte de l'image"
     * )
     */
    private $value;

    /**
     * @ORM\Column(type="string", length=8000)
     * @Groups("api_questionImages_get")
     * @Assert\NotBlank(
     *      message = "Veuillez saisir l'URL de l'image"
     * )
     * @Assert\Url(
     *      message = "L'url '{{ value }}' n'est pas valide",
     * )
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
     * @ORM\ManyToMany(targetEntity=QuestionImage::class, mappedBy="choices")
     */
    private $questionImages;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->questionImages = new ArrayCollection();
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

    public function __toString()
    {
        return (string) $this->value;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|QuestionImage[]
     */
    public function getQuestionImages(): \Doctrine\Common\Collections\Collection
    {
        return $this->questionImages;
    }

    public function addQuestionImage(QuestionImage $questionImage): self
    {
        if (!$this->questionImages->contains($questionImage)) {
            $this->questionImages[] = $questionImage;
            $questionImage->addChoice($this);
        }

        return $this;
    }

    public function removeQuestionImage(QuestionImage $questionImage): self
    {
        if ($this->questionImages->contains($questionImage)) {
            $this->questionImages->removeElement($questionImage);
            $questionImage->removeChoice($this);
        }

        return $this;
    }
}