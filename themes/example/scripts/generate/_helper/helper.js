const { writeFile } = require('fs/promises');
const { render } = require('ezal');

function mapToArray(map) {
  let array = [];
  map.forEach((items, name)=>{
    array.push({name, items: Array.from(items)});
  });
  return array;
}

async function generate(layout, options, output) {
  let html = await render.pug(layout, options);
  return writeFile(output, html, 'utf-8');
}

module.exports = {
  mapToArray,
  generate,
}
