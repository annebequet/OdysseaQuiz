-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `choices` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `correct_answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `environment_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B6F7494E12469DE2` (`category_id`),
  KEY `IDX_B6F7494E903E3A94` (`environment_id`),
  CONSTRAINT `FK_B6F7494E12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_B6F7494E903E3A94` FOREIGN KEY (`environment_id`) REFERENCES `environment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `question` (`id`, `type`, `name`, `title`, `choices`, `correct_answer`, `created_at`, `updated_at`, `category_id`, `environment_id`) VALUES
(1,	'radiogroup',	'marin',	'Pourquoi les marins ?',	'[\"Pourquoi pas\", \"Pour le rhum\", \"En chantant c\'est mieux\", \"Sans moi, merci\"]',	'Pourquoi pas',	'2020-08-03 16:34:42',	NULL,	1,	1),
(2,	'radiogroup',	'beurre salé',	'Qui dit oui est-il d\'accord ?',	'[\"mmmmmh\", \"Qui ne dit mot approuve\", \"Les absents ont toujours tort\", \"sans sucre, merci\"]',	'sans sucre, merci',	'2020-08-03 16:36:36',	NULL,	1,	1),
(3,	'radiogroup',	'pigouins',	'Dans quel hémisphère les pingouins vivent-ils ?',	'[\"Hémisphère nord\", \"Hémisphère sud\", \"Les deux\", \"Ils ont tous disparu\"]',	'Hémisphère nord',	'2020-08-03 16:37:26',	NULL,	1,	1),
(4,	'radiogroup',	'dangereux',	'Quel est l\'animal le plus dangereux vivant dans les fonds marins ?',	'[\"Le requin blanc\", \"L\'orque\", \"La baleine bleue\", \"Le dauphin\"]',	'Le requin blanc',	'2020-08-03 16:39:18',	NULL,	2,	1),
(5,	'radiogroup',	'guerre',	'Quand était la guerre civile américaine ?',	'[\"1750-1800\", \"1800-1850\", \"1850-1900\", \"1900-1950\", \"after 1950\"]',	'1850-1900',	'2020-08-03 16:40:34',	NULL,	2,	1),
(6,	'radiogroup',	'citation',	'Qui a dit \'Give me liberty or give me death\' ?',	'[\"John Hancock\", \"James Madison\", \"Patrick Henry\", \"Samuel Adams\"]',	'Patrick Henry',	'2020-08-03 16:42:01',	NULL,	2,	1),
(7,	'radiogroup',	'nombres',	'Quel est mon chiffre préféré ?',	'[\"1\", \"2\", \"3\", \"4\"]',	'4',	'2020-08-03 16:43:37',	NULL,	1,	1),
(8,	'radiogroup',	'couleur',	'Quelle est ma couleur préférée ?',	'[\"patate\", \"orange\", \"bleu\", \"vert\"]',	'bleu',	'2020-08-03 16:44:24',	NULL,	2,	1);

-- 2020-08-04 14:11:54