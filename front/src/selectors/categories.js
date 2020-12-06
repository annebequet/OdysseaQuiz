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
  categorySelected.id = (parseInt(categoryId) + 1);
  return categorySelected;
};

// Find which children objects in a parent object posess a specific key.
export const ObjectFilteredByKey = (object, predicate) => Object.fromEntries(Object.entries(object).filter(([key, value]) => object[key].scores));

export const getScoreInformations = (categories) => {
  // If there is a key score in the category
  const categoryWithScore = ObjectFilteredByKey(categories, 'scores');
  console.log(categoryWithScore);
  if ('scores' in categories) {
    // Then we get access to the score and the pseudo of the players
    const scoreInformations = Object.keys(categories.scores).map((scoreId) => {
      const { score, user } = categories.scores[scoreId];
      const { pseudo } = user;
      return { score, pseudo };
    });
    return scoreInformations;
  }
  return 'a';
};
