<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201125162347 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_image ADD correct_answer_id INT NOT NULL, DROP correct_answer');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155BFD2E7CF7 FOREIGN KEY (correct_answer_id) REFERENCES answer_image (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F5D6155BFD2E7CF7 ON question_image (correct_answer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_image DROP FOREIGN KEY FK_F5D6155BFD2E7CF7');
        $this->addSql('DROP INDEX UNIQ_F5D6155BFD2E7CF7 ON question_image');
        $this->addSql('ALTER TABLE question_image ADD correct_answer VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP correct_answer_id');
    }
}
