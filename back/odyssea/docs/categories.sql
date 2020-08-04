-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `category` (`id`, `name`, `picture`, `created_at`, `updated_at`) VALUES
(1,	'Banquise',	'',	'2020-08-03 16:29:24',	NULL),
(2,	'Poissons',	'',	'2020-08-03 16:29:38',	NULL),
(3,	'Histoire',	'',	'2020-08-03 16:30:03',	NULL),
(4,	'Baleines',	'',	'2020-08-03 16:30:27',	NULL);

-- 2020-08-04 13:22:36