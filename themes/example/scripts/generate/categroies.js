const path = require('path');
const categoriesOutput = path.join(process.cwd(), './out/categories/');
const tagsOutput = path.join(process.cwd(), './out/tags/');
const { mapToArray, generate } = require('./_helper/helper');

const { addListener, tags, categories } = require('ezal');

module.exports = async ()=>{
  addListener('pre-assets', async ()=>{
    let categoriesArray =  mapToArray(categories);
    let tagArray = mapToArray(tags);
    await generate('categories', { categories: categoriesArray, page: { title: 'Categories', layout: 'archive'} }, path.join(categoriesOutput, 'index.html'));
    await generate('tags', { tags: tagArray, page: { title: 'Tags', layout: 'archive'} }, path.join(tagsOutput, 'index.html'));
    for (const category of categoriesArray) {
      await generate('category', { items: category.items, page: { title: category.name, layout: 'archive' }}, path.join(categoriesOutput, category.name, 'index.html'));
    }
    for (const tag of tagArray) {
      await generate('tag', { items: tag.items, page: { title: tag.name, layout: 'archive' }}, path.join(tagsOutput, tag.name, 'index.html'));
    }
    return
  });
}
