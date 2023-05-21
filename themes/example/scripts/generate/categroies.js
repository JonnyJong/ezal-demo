const path = require('path');
const categoriesLayout = path.join(__dirname, '../../layout/categories.pug');
const categoriesOutput = path.join(process.cwd(), './out/categories/');
const tagsLayout = path.join(__dirname, '../../layout/tags.pug');
const tagsOutput = path.join(process.cwd(), './out/tags/');
const categoryLayout = path.join(__dirname, '../../layout/category.pug');
const tagLayout = path.join(__dirname, '../../layout/tag.pug');
const { mapToArray, generate } = require('./helper/helper');
const { url4 } = require('../../plugin/pug/helper')();

module.exports = async ({config, theme, pages, posts, categories, tags, Page, Post})=>{
  let tagArray = mapToArray(tags);
  let categoriesArray =  mapToArray(categories);
  await generate(tagsLayout, {config, theme, pages, posts, categories, tags: tagArray, Page, Post, page: {title: 'Tags', layout: 'tags'}, url4}, path.join(tagsOutput, 'index.html'));
  await generate(categoriesLayout, {config, theme, pages, posts, categories: categoriesArray, tags, Page, Post, page: {title: 'categories', layout: 'categories'}, url4}, path.join(categoriesOutput, 'index.html'));
  for (let i = 0; i < categoriesArray.length; i++) {
    await generate(tagLayout, {config, theme, pages, posts, categories, tags, items: tagArray[i].items, Page, Post, page: {title: tagArray[i].name, layout: 'tag'}, url4}, path.join(tagsOutput, tagArray[i].name, 'index.html'));
  }
  for (let i = 0; i < categoriesArray.length; i++) {
    await generate(categoryLayout, {config, theme, pages, posts, categories, tags, items: categoriesArray[i].items, Page, Post, page: {title: categoriesArray[i].name, layout: 'category'}, url4}, path.join(categoriesOutput, tagArray[i].name, 'index.html'));
  }
  return;
}
