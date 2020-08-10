SET NAMES utf8mb4;

INSERT INTO `user` (`id`, `last_name`, `first_name`, `pseudo`, `email`, `password`, `roles`, `created_at`, `updated_at`, `environment_id`, `api_token`, `avatar_id`) VALUES
(1,	'Mouton',	'Després',	'Mouton',	'mouton@mouton.fr',	'$argon2id$v=19$m=65536,t=4,p=1$Z25yoAl/Qu826B23zbmXyQ$5qH+jMeH7RTuglsgIB8joo12L7AhM419BtxVa7iylIU',	'[\"ROLE_USER\", \"ROLE_ADMIN\"]',	'2020-08-04 17:17:22',	'2020-08-04 17:26:05',	2,	NULL,	5),
(2,	'Pastoral',	'Poireau',	'Poireau',	'poireau@oclick.io',	'$argon2id$v=19$m=65536,t=4,p=1$oDzaBECUgniGk54aiXwAtw$1OOoUzpU7FK1qb+cpeo9PTdf+bXau1oOToLTJo6VDDY',	'[\"ROLE_USER\", \"ROLE_ADMIN\"]',	'2020-08-06 11:05:20',	'2020-08-06 13:51:24',	1,	'66693c90ccfa63c297ea267827b275f8',	1);