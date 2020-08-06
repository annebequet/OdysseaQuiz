-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

INSERT INTO `category` (`id`, `name`, `picture`, `created_at`, `updated_at`) VALUES
(1,	'Folklore',	'https://chemsec.org/app/uploads/2019/02/Lost-at-SEA.jpg',	'2020-08-04 16:31:07',	NULL),
(2,	'Faune',	'https://q-cf.bstatic.com/images/hotel/max1024x768/249/249219414.jpg',	'2020-08-04 16:31:17',	NULL),
(3,	'Flore',	'',	'2020-08-04 16:31:22',	NULL),
(4,	'Ecologie',	'',	'2020-08-04 16:31:29',	NULL);


INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20200724124500',	'2020-08-03 17:03:42',	159),
('DoctrineMigrations\\Version20200724130913',	'2020-08-03 17:03:42',	258),
('DoctrineMigrations\\Version20200727100412',	'2020-08-03 17:03:42',	12),
('DoctrineMigrations\\Version20200727101746',	'2020-08-03 17:03:42',	5),
('DoctrineMigrations\\Version20200727214329',	'2020-08-03 17:03:42',	12),
('DoctrineMigrations\\Version20200803150549',	'2020-08-03 17:06:00',	141),
('DoctrineMigrations\\Version20200803151144',	'2020-08-03 17:11:50',	106);

INSERT INTO `environment` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'Adulte',	'2020-08-04 16:31:49',	NULL),
(2,	'Enfant',	'2020-08-04 16:32:11',	NULL);


INSERT INTO `gallery` (`id`, `image_url`, `created_at`, `updated_at`, `name`) VALUES
(1,	'https://image.flaticon.com/icons/svg/1805/1805880.svg',	'2020-08-03 17:42:50',	NULL,	'Phoque'),
(2,	'https://image.flaticon.com/icons/svg/1805/1805958.svg',	'2020-08-03 17:44:50',	NULL,	'Tortue'),
(3,	'https://image.flaticon.com/icons/svg/1805/1805946.svg',	'2020-08-03 17:45:13',	NULL,	'Dauphin'),
(4,	'https://image.flaticon.com/icons/svg/1805/1805870.svg',	'2020-08-03 17:45:43',	NULL,	'Poisson'),
(5,	'https://image.flaticon.com/icons/svg/1805/1805922.svg',	'2020-08-03 17:46:16',	NULL,	'Homard'),
(6,	'https://image.flaticon.com/icons/svg/1805/1805927.svg',	'2020-08-03 17:46:43',	NULL,	'Pingouin');

INSERT INTO `question` (`id`, `type`, `name`, `title`, `choices`, `correct_answer`, `created_at`, `updated_at`, `category_id`, `environment_id`) VALUES
(1,	'radiogroup',	'marin',	'Pourquoi les marins ?',	'[\"Pourquoi pas\", \"Pour le rhum\", \"En chantant c\'est mieux\", \"Sans moi, merci\"]',	'Pourquoi pas',	'2020-08-03 16:34:42',	NULL,	1,	1),
(2,	'radiogroup',	'beurre salé',	'Qui dit oui est-il d\'accord ?',	'[\"mmmmmh\", \"Qui ne dit mot approuve\", \"Les absents ont toujours tort\", \"sans sucre, merci\"]',	'sans sucre, merci',	'2020-08-03 16:36:36',	NULL,	1,	1),
(3,	'radiogroup',	'pigouins',	'Dans quel hémisphère les pingouins vivent-ils ?',	'[\"Hémisphère nord\", \"Hémisphère sud\", \"Les deux\", \"Ils ont tous disparu\"]',	'Hémisphère nord',	'2020-08-03 16:37:26',	NULL,	1,	1),
(4,	'radiogroup',	'dangereux',	'Quel est l\'animal le plus dangereux vivant dans les fonds marins ?',	'[\"Le requin blanc\", \"L\'orque\", \"La baleine bleue\", \"Le dauphin\"]',	'Le requin blanc',	'2020-08-03 16:39:18',	NULL,	2,	1),
(5,	'radiogroup',	'guerre',	'Quand était la guerre civile américaine ?',	'[\"1750-1800\", \"1800-1850\", \"1850-1900\", \"1900-1950\", \"after 1950\"]',	'1850-1900',	'2020-08-03 16:40:34',	NULL,	2,	1),
(6,	'radiogroup',	'citation',	'Qui a dit \'Give me liberty or give me death\' ?',	'[\"John Hancock\", \"James Madison\", \"Patrick Henry\", \"Samuel Adams\"]',	'Patrick Henry',	'2020-08-03 16:42:01',	NULL,	2,	1),
(7,	'radiogroup',	'nombres',	'Quel est mon chiffre préféré ?',	'[\"1\", \"2\", \"3\", \"4\"]',	'4',	'2020-08-03 16:43:37',	NULL,	1,	1),
(8,	'radiogroup',	'couleur',	'Quelle est ma couleur préférée ?',	'[\"patate\", \"orange\", \"bleu\", \"vert\"]',	'bleu',	'2020-08-03 16:44:24',	NULL,	2,	1);

INSERT INTO `score` (`id`, `quiz_nb`, `points`, `score`, `created_at`, `updated_at`, `user_id`, `category_id`, `environment_id`) VALUES
(3,	3,	19,	6.0,	'2020-08-05 13:21:28',	'2020-08-05 13:42:47',	1,	2,	1),
(4,	2,	11,	5.0,	'2020-08-05 13:35:07',	'2020-08-05 15:07:09',	1,	3,	1),
(5,	1,	3,	3.0,	'2020-08-05 15:08:17',	NULL,	1,	4,	1),
(6,	4,	20,	5.0,	'2020-08-05 15:25:04',	'2020-08-05 15:43:09',	1,	1,	1),
(7,	1,	8,	8.0,	'2020-08-05 15:53:10',	NULL,	1,	1,	2),
(8,	1,	8,	8.0,	'2020-08-06 14:04:43',	NULL,	1,	2,	2),
(9,	3,	24,	8.0,	'2020-08-06 14:05:05',	'2020-08-06 14:05:12',	2,	2,	1);


INSERT INTO `user` (`id`, `last_name`, `first_name`, `pseudo`, `email`, `password`, `roles`, `created_at`, `updated_at`, `environment_id`, `api_token`, `avatar_id`) VALUES
(1,	'Mouton',	'Després',	'Mouton',	'mouton@mouton.fr',	'$argon2id$v=19$m=65536,t=4,p=1$Z25yoAl/Qu826B23zbmXyQ$5qH+jMeH7RTuglsgIB8joo12L7AhM419BtxVa7iylIU',	'[\"ROLE_USER\", \"ROLE_ADMIN\"]',	'2020-08-04 17:17:22',	'2020-08-04 17:26:05',	2,	NULL,	5),
(2,	'Pastoral',	'Poireau',	'Poireau',	'poireau@oclick.io',	'$argon2id$v=19$m=65536,t=4,p=1$oDzaBECUgniGk54aiXwAtw$1OOoUzpU7FK1qb+cpeo9PTdf+bXau1oOToLTJo6VDDY',	'[\"ROLE_USER\", \"ROLE_ADMIN\"]',	'2020-08-06 11:05:20',	'2020-08-06 13:51:24',	1,	'66693c90ccfa63c297ea267827b275f8',	1);

-- 2020-08-06 12:40:27