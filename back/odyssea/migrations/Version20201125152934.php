<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201125152934 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question_image (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, environment_id INT DEFAULT NULL, type VARCHAR(50) NOT NULL, name VARCHAR(255) NOT NULL, title LONGTEXT NOT NULL, choices LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', correct_answer VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_F5D6155B12469DE2 (category_id), INDEX IDX_F5D6155B903E3A94 (environment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155B12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155B903E3A94 FOREIGN KEY (environment_id) REFERENCES environment (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE grade_adult (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, question_id INT NOT NULL, grade INT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_73780A8A76ED395 (user_id), INDEX IDX_73780A81E27F6BF (question_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE grade_adult ADD CONSTRAINT FK_73780A81E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)');
        $this->addSql('ALTER TABLE grade_adult ADD CONSTRAINT FK_73780A8A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE question_image');
    }
}
