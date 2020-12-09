<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201209170244 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question_image_answer_image (question_image_id INT NOT NULL, answer_image_id INT NOT NULL, INDEX IDX_6F2BF8BE5EAD9561 (question_image_id), INDEX IDX_6F2BF8BE1AEF2408 (answer_image_id), PRIMARY KEY(question_image_id, answer_image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE question_image_answer_image ADD CONSTRAINT FK_6F2BF8BE5EAD9561 FOREIGN KEY (question_image_id) REFERENCES question_image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE question_image_answer_image ADD CONSTRAINT FK_6F2BF8BE1AEF2408 FOREIGN KEY (answer_image_id) REFERENCES answer_image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE answer_image DROP FOREIGN KEY FK_5E07ED0C5EAD9561');
        $this->addSql('DROP INDEX IDX_5E07ED0C5EAD9561 ON answer_image');
        $this->addSql('ALTER TABLE answer_image DROP question_image_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE question_image_answer_image');
        $this->addSql('ALTER TABLE answer_image ADD question_image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE answer_image ADD CONSTRAINT FK_5E07ED0C5EAD9561 FOREIGN KEY (question_image_id) REFERENCES question_image (id)');
        $this->addSql('CREATE INDEX IDX_5E07ED0C5EAD9561 ON answer_image (question_image_id)');
    }
}
