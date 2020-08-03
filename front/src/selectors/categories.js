/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugFromTitle = (title = '') => {
  //we use a regex to transform the title into something that fits the slug norms
  const modifiedTitle = title.replace(/[&]/g, '').replace(/[_]/g, '-');

  const slug = slugify(modifiedTitle, {
    lower: true,
    remove: /[*+~.()'"!:@&]/g,
  });

  return slug;
};

export const getCategoryBySlug = (categoryList, slug) => categoryList.find(
  (category) => getSlugFromTitle(category.title) === slug,
);
