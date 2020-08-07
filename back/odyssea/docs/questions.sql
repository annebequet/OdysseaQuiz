-- Adminer 4.7.6 MySQL dump

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