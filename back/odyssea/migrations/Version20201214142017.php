<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201214142017 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image CHANGE image_link image_link VARCHAR(2000) NOT NULL');
        $this->addSql('ALTER TABLE category CHANGE picture picture VARCHAR(2000) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_64C19C15E237E06 ON category (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4626DE225E237E06 ON environment (name)');
        $this->addSql('ALTER TABLE gallery CHANGE image_url image_url VARCHAR(2000) NOT NULL, CHANGE name name VARCHAR(20) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_472B783A5E237E06 ON gallery (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B6F7494E5E237E06 ON question (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F5D6155B5E237E06 ON question_image (name)');
        $this->addSql('ALTER TABLE user CHANGE avatar_id avatar_id INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE answer_image CHANGE image_link image_link VARCHAR(8000) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_64C19C15E237E06 ON category');
        $this->addSql('DROP INDEX UNIQ_64C19C116DB4F89 ON category');
        $this->addSql('ALTER TABLE category CHANGE picture picture VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_4626DE225E237E06 ON environment');
        $this->addSql('DROP INDEX UNIQ_472B783AAC9C95FD ON gallery');
        $this->addSql('DROP INDEX UNIQ_472B783A5E237E06 ON gallery');
        $this->addSql('ALTER TABLE gallery CHANGE image_url image_url VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE name name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_B6F7494E5E237E06 ON question');
        $this->addSql('DROP INDEX UNIQ_B6F7494E2B36786B ON question');
        $this->addSql('DROP INDEX UNIQ_F5D6155B5E237E06 ON question_image');
        $this->addSql('DROP INDEX UNIQ_F5D6155B2B36786B ON question_image');
        $this->addSql('ALTER TABLE user CHANGE avatar_id avatar_id INT DEFAULT NULL');
    }
}
