<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\GalleryRepository;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=GalleryRepository::class)
 * @UniqueEntity(
 *      fields = "imageUrl",
 *      message = "L'image {{ value }} a déjà été postée."
 * )
 * @UniqueEntity(
 *      fields = "name",
 *      message = "{{ value }} est déjà utilisé."
 * )
 */
class Gallery
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"api_avatars_get", "api_avatars_get_one"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=2000, nullable=false)
     * @Groups({"api_avatars_get", "api_avatars_get_one", "api_users_get_one"})
     * @Assert\NotBlank(
     *      message = "Veuillez saisir l'URL de l'image"
     * )
     * @Assert\Url(
     *    message = "L'url '{{ value }}' n'est pas valide.",
     * )
     */
    private $imageUrl;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=20, unique=true)
     * @Groups({"api_avatars_get", "api_avatars_get_one"})
     * @Assert\NotBlank(
     *      message = "Veuillez saisir le nom de l'avatar"
     * )
     * @Assert\Length(
     *      min = 3,
     *      minMessage = "Veuillez saisir un nom de plus de {{ limit }} caractères",
     *      max = 20,
     *      maxMessage = "Veuillez saisir un nom de moins de {{ limit }} caractères"
     * )
     */
    private $name;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImageUrl(): ?string
    {
        return $this->imageUrl;
    }

    public function setImageUrl(?string $imageUrl): self
    {
        $this->imageUrl = $imageUrl;

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
        return $this->name;
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
}