<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201125161114 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image ADD question_image_id INT NOT NULL');
        $this->addSql('ALTER TABLE answer_image ADD CONSTRAINT FK_5E07ED0C5EAD9561 FOREIGN KEY (question_image_id) REFERENCES question_image (id)');
        $this->addSql('CREATE INDEX IDX_5E07ED0C5EAD9561 ON answer_image (question_image_id)');
        $this->addSql('ALTER TABLE question_image DROP choices');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image DROP FOREIGN KEY FK_5E07ED0C5EAD9561');
        $this->addSql('DROP INDEX IDX_5E07ED0C5EAD9561 ON answer_image');
        $this->addSql('ALTER TABLE answer_image DROP question_image_id');
        $this->addSql('ALTER TABLE question_image ADD choices LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:json)\'');
    }
}
