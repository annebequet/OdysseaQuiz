/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugFromTitle = (title = '') => {
  // we use a regex to transform the title into something that fits the slug norms
  const modifiedTitle = title.replace(/[&]/g, '').replace(/[_]/g, '-');

  const slug = slugify(modifiedTitle, {
    lower: true,
    remove: /[*+~.()'"!:@&]/g,
  });
  return slug;
};

// find the id of the category that matches the url slug
const getCategoryIdBySlug = (categoryList, slug) => Object.keys(categoryList).find((categoryId) => {
  const sluggedCategoryName = getSlugFromTitle(categoryList[categoryId].category.name);
  return sluggedCategoryName === slug;
});

// return an object of the category that matches the slug
export const getCategoryBySlug = (categoryList, slug) => {
  const categoryId = getCategoryIdBySlug(categoryList, slug);
  const categorySelected = categoryList[categoryId];
  // insert the id of the category into the object category.
  categorySelected.id = categoryId;
  return categorySelected;
};
