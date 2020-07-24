<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200724130913 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact ADD user_id INT DEFAULT NULL, ADD subject_id INT NOT NULL');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E63823EDC87 FOREIGN KEY (subject_id) REFERENCES subject (id)');
        $this->addSql('CREATE INDEX IDX_4C62E638A76ED395 ON contact (user_id)');
        $this->addSql('CREATE INDEX IDX_4C62E63823EDC87 ON contact (subject_id)');
        $this->addSql('ALTER TABLE question ADD category_id INT DEFAULT NULL, ADD environment_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E903E3A94 FOREIGN KEY (environment_id) REFERENCES environment (id)');
        $this->addSql('CREATE INDEX IDX_B6F7494E12469DE2 ON question (category_id)');
        $this->addSql('CREATE INDEX IDX_B6F7494E903E3A94 ON question (environment_id)');
        $this->addSql('ALTER TABLE score ADD user_id INT NOT NULL, ADD category_id INT NOT NULL, ADD environment_id INT NOT NULL');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_3299375112469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751903E3A94 FOREIGN KEY (environment_id) REFERENCES environment (id)');
        $this->addSql('CREATE INDEX IDX_32993751A76ED395 ON score (user_id)');
        $this->addSql('CREATE INDEX IDX_3299375112469DE2 ON score (category_id)');
        $this->addSql('CREATE INDEX IDX_32993751903E3A94 ON score (environment_id)');
        $this->addSql('ALTER TABLE user ADD environment_id INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649903E3A94 FOREIGN KEY (environment_id) REFERENCES environment (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649903E3A94 ON user (environment_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638A76ED395');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E63823EDC87');
        $this->addSql('DROP INDEX IDX_4C62E638A76ED395 ON contact');
        $this->addSql('DROP INDEX IDX_4C62E63823EDC87 ON contact');
        $this->addSql('ALTER TABLE contact DROP user_id, DROP subject_id');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E12469DE2');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E903E3A94');
        $this->addSql('DROP INDEX IDX_B6F7494E12469DE2 ON question');
        $this->addSql('DROP INDEX IDX_B6F7494E903E3A94 ON question');
        $this->addSql('ALTER TABLE question DROP category_id, DROP environment_id');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751A76ED395');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_3299375112469DE2');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751903E3A94');
        $this->addSql('DROP INDEX IDX_32993751A76ED395 ON score');
        $this->addSql('DROP INDEX IDX_3299375112469DE2 ON score');
        $this->addSql('DROP INDEX IDX_32993751903E3A94 ON score');
        $this->addSql('ALTER TABLE score DROP user_id, DROP category_id, DROP environment_id');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649903E3A94');
        $this->addSql('DROP INDEX IDX_8D93D649903E3A94 ON user');
        $this->addSql('ALTER TABLE user DROP environment_id');
    }
}
