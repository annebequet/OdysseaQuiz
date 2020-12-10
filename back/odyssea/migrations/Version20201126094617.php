<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126094617 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image DROP FOREIGN KEY FK_5E07ED0C2AE6C882');
        $this->addSql('DROP INDEX UNIQ_5E07ED0C2AE6C882 ON answer_image');
        $this->addSql('ALTER TABLE answer_image DROP is_the_correct_answer_of_id');
        $this->addSql('ALTER TABLE question_image DROP INDEX UNIQ_F5D6155BFD2E7CF7, ADD INDEX IDX_F5D6155BFD2E7CF7 (correct_answer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image ADD is_the_correct_answer_of_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE answer_image ADD CONSTRAINT FK_5E07ED0C2AE6C882 FOREIGN KEY (is_the_correct_answer_of_id) REFERENCES question_image (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5E07ED0C2AE6C882 ON answer_image (is_the_correct_answer_of_id)');
        $this->addSql('ALTER TABLE question_image DROP INDEX IDX_F5D6155BFD2E7CF7, ADD UNIQUE INDEX UNIQ_F5D6155BFD2E7CF7 (correct_answer_id)');
    }
}
