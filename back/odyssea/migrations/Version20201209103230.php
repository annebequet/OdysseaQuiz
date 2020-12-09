<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201209103230 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_image DROP FOREIGN KEY FK_F5D6155BFD2E7CF7');
        $this->addSql('DROP INDEX IDX_F5D6155BFD2E7CF7 ON question_image');
        $this->addSql('ALTER TABLE question_image ADD correct_answer VARCHAR(255) NOT NULL, CHANGE correct_answer_id correct_answer_object_id INT NOT NULL');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155B2BED92B7 FOREIGN KEY (correct_answer_object_id) REFERENCES answer_image (id)');
        $this->addSql('CREATE INDEX IDX_F5D6155B2BED92B7 ON question_image (correct_answer_object_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_image DROP FOREIGN KEY FK_F5D6155B2BED92B7');
        $this->addSql('DROP INDEX IDX_F5D6155B2BED92B7 ON question_image');
        $this->addSql('ALTER TABLE question_image DROP correct_answer, CHANGE correct_answer_object_id correct_answer_id INT NOT NULL');
        $this->addSql('ALTER TABLE question_image ADD CONSTRAINT FK_F5D6155BFD2E7CF7 FOREIGN KEY (correct_answer_id) REFERENCES answer_image (id)');
        $this->addSql('CREATE INDEX IDX_F5D6155BFD2E7CF7 ON question_image (correct_answer_id)');
    }
}
