const path = require('path');
const layout = path.join(__dirname, '../../layout/index.pug');
const output = path.join(process.cwd(), './out/index.html');
const { generate } = require('./helper/helper');
const { url4 } = require('../../plugin/pug/helper')();

module.exports = ({config, theme, pages, posts, categories, tags, Page, Post})=>{
  return generate(layout, {config, theme, pages, posts: Array.from(posts), categories, tags, Page, Post, page: {layout: 'index'}, url4}, output);
}
