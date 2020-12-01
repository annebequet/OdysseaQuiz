<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126105459 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_image DROP FOREIGN KEY FK_F5D6155BFD2E7CF7');
        $this->addSql('ALTER TABLE answer_image DROP FOREIGN KEY FK_5E07ED0C5EAD9561');
        $this->addSql('CREATE TABLE grade_adult (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, question_id INT NOT NULL, grade INT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_73780A8A76ED395 (user_id), INDEX IDX_73780A81E27F6BF (question_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE grade_adult ADD CONSTRAINT FK_73780A8A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE grade_adult ADD CONSTRAINT FK_73780A81E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)');
        $this->addSql('DROP TABLE answer_image');
        $this->addSql('DROP TABLE question_image');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE answer_image (id INT AUTO_INCREMENT NOT NULL, question_image_id INT DEFAULT NULL, value VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, image_link VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_5E07ED0C5EAD9561 (question_image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE question_image (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, environment_id INT DEFAULT NULL, correct_answer_id INT NOT NULL, type VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, title LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_F5D6155BFD2E7CF7 (correct_answer_id), INDEX IDX_F5D6155B12469DE2 (category_id), INDEX IDX_F5D6155B903E3A94 (environment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE answer_image ADD CONSTRAINT FK_5E07ED0C5EAD9561 FOREIGN KEY (question_image_id) REFERENCES question_image (id)');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155B12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155B903E3A94 FOREIGN KEY (environment_id) REFERENCES environment (id)');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155BFD2E7CF7 FOREIGN KEY (correct_answer_id) REFERENCES answer_image (id)');
        $this->addSql('DROP TABLE grade_adult');
    }
}
