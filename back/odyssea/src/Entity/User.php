<?php

namespace App\Entity;

use App\Entity\Gallery;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use App\Repository\UserRepository;
use App\Repository\GalleryRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\OptionsResolver\Options;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(
 *      fields="email",
 *      message="{{ value }} est déjà utilisé."
 * )
 * @UniqueEntity(
 *      fields="pseudo",
 *      message="{{ value }} est déjà utilisé."
 * )
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"users_get", "users_get_one"})
     * @Assert\Email(
     *     message = "Entrez un email valide."
     * )
     * @Assert\NotBlank(
     *      message= "Veuillez remplir ce champs"
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"users_get", "users_get_one"})
     * @Assert\Length(
     *      min = 2,
     *      max = 18,
     *      minMessage = "Le nom doit contenir plus de {{ limit }} caractères.",
     *      maxMessage = "Le nom ne peut contenir plus de {{ limit }} caractères.",
     *      allowEmptyString = true
     * )
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"users_get", "users_get_one"})
     * @Assert\Length(
     *      min = 2,
     *      max = 18,
     *      minMessage = "Le prénom doit contenir plus de {{ limit }} caractères.",
     *      maxMessage = "Le prénom ne peut contenir plus de {{ limit }} caractères.",
     *      allowEmptyString = true
     * )
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", unique=true, length=16)
     * @Groups({"users_get", "users_get_one"})
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 6,
     *      max = 12,
     *      minMessage = "Le pseudo doit contenir plus de {{ limit }} caractères.",
     *      maxMessage = "Le pseudo ne peut contenir plus de {{ limit }} caractères.",
     *      allowEmptyString = false
     * )
     */
    private $pseudo;

    /**
     * @ORM\Column(type="json")
     * @Groups("users_get_one")
     * @Assert\NotBlank
     * @Assert\Count(min=1)
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Groups("users_get_one")
     * @Assert\Length(
     *      min=4
     * )
     * @Assert\NotBlank(
     *      message = "Veuillez remplir ce champs."
     * )
     */
    private $password;

    /**
     * @ORM\Column(type="string", unique=true, nullable=true)
     */
    private $apiToken;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Environment::class, inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"users_get", "users_get_one"})
     * @Assert\NotBlank(
     *      message = "Choisissez un environnement de jeu."
     * )
     */
    private $environment;

    /**
     * @ORM\OneToMany(targetEntity=Contact::class, mappedBy="user")
     */
    private $contacts;

    /**
     * @ORM\OneToMany(targetEntity=Score::class, mappedBy="user", orphanRemoval=true)
     * @Groups({"users_get_one"})
     */
    private $scores;

    /**
     * @ORM\ManyToOne(targetEntity=Gallery::class)
     * @Groups({"users_get", "users_get_one"})
     */
    private $avatar;
    
    public function __construct()
    {
        $this->contacts = new ArrayCollection();
        $this->scores = new ArrayCollection();
        $this->createdAt = new \DateTime();
        // $this->avatar = 1;
        $this->roles = ["ROLE_USER"];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
    */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        //$this->apiToken = null;
    }

    /**
     * Get the value of lastName
     */ 
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastName
     *
     * @return  self
     */ 
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of firstName
     */ 
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstName
     *
     * @return  self
     */ 
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

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
     * @return Collection|Contact[]
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contact $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts[] = $contact;
            $contact->setUser($this);
        }

        return $this;
    }

    public function removeContact(Contact $contact): self
    {
        if ($this->contacts->contains($contact)) {
            $this->contacts->removeElement($contact);
            // set the owning side to null (unless already changed)
            if ($contact->getUser() === $this) {
                $contact->setUser(null);
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
            $score->setUser($this);
        }

        return $this;
    }

    public function removeScore(Score $score): self
    {
        if ($this->scores->contains($score)) {
            $this->scores->removeElement($score);
            // set the owning side to null (unless already changed)
            if ($score->getUser() === $this) {
                $score->setUser(null);
            }
        }

        return $this;
    }

    /**
     * Get the value of pseudo
     */ 
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * Set the value of pseudo
     *
     * @return  self
     */ 
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * Get the value of apiToken
     */ 
    public function getApiToken()
    {
        return $this->apiToken;
    }

    /**
     * Set the value of apiToken
     *
     * @return  self
     */ 
    public function setApiToken($apiToken)
    {
        $this->apiToken = $apiToken;

        return $this;
    }

    public function __toString() 
    {
        return (string) $this->email; 
    }

    public function getAvatar(): ?Gallery
    {
        return $this->avatar;
    }

    public function setAvatar(?Gallery $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getImageUrl()
    {
        return $this->avatar->getImageUrl();
    }
}