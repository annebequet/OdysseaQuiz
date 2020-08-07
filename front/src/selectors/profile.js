import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromPseudo = (pseudo = '') => {
  // we use a regex to transform the title into something that fits the slug norms
  const modifiedPseudo = pseudo.replace(/[&]/g, '').replace(/[_]/g, '-');

  const slug = slugify(modifiedPseudo, {
    lower: true,
    remove: /[*+~.()'"!:@&]/g,
  });

  return slug;
};
