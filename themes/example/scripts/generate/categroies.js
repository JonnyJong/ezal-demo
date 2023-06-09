const path = require('path');
const categoriesOutput = path.join(process.cwd(), './out/categories/');
const tagsOutput = path.join(process.cwd(), './out/tags/');
const { generate } = require('./_helper/helper');

const { addListener, tags, categories } = require('ezal');

async function generateCategoryPages(category) {
  let pageCategories = null;
  if (category.children.size > 0) {
    pageCategories = [];
    let arr = [];
    category.children.forEach((v)=>arr.push(v));
    for (const subCategory of arr) {
      pageCategories.push(await generateCategoryPages(subCategory));
    }
  }
  let pageTitle = 'Categories';
  if (category.name) {
    pageTitle = 'Category: ' + category.name;
  }
  let categoryPath = '';
  if (category.path) {
    categoryPath = category.path.join('/') + '/';
  }
  let pageItems = [];
  if (category.posts) {
    pageItems = Array.from(category.posts);
  }
  await generate('category',
    {
      items: pageItems,
      categories: pageCategories,
      page: {
        title: pageTitle,
        layout: 'archive',
        categoryPath: categoryPath,
      }
    },
    path.join(categoriesOutput, categoryPath, 'index.html'),
  );
  return {
    path: categoryPath,
    name: category.name,
    size: pageItems.length,
  };
}

async function generateTagPages(tags) {
  let tagArray = Array.from(tags);
  await generate('tags', { tags: tagArray, page: { title: 'Tags', layout: 'archive'} }, path.join(tagsOutput, 'index.html'));
  for (const tag of tagArray) {
    await generate('tag', { items: Array.from(tag.posts), page: { title: tag.name, layout: 'archive' }}, path.join(tagsOutput, tag.name, 'index.html'));
  }
  return;
}

module.exports = async ()=>{
  addListener('pre-assets', async ()=>{
    // console.log(categories);
    await generateCategoryPages(categories);
    await generateTagPages(tags);
    return
  });
}
