const path = require('path');
const output = path.join(process.cwd(), './out/index.html');
const { generate } = require('./_helper/helper');

const { addListener, posts } = require('ezal');

module.exports = ()=>{
  addListener('pre-assets', async ()=>{
    return generate('index', { posts: Array.from(posts), page: { layout: 'index' }}, output);
  });
}
