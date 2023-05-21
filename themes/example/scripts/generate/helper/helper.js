const { writeFile, access, mkdir } = require('fs/promises');
const path = require('path');
const pug = require('pug');

function mapToArray(map) {
  let array = [];
  map.forEach((items, name)=>{
    array.push({name, items: Array.from(items)});
  });
  return array;
}

async function generate(layout, config, output) {
  await access(path.join(output, '../'))
  .catch(()=>mkdir(path.join(output, '../'), { recursive: true }));
  let html = pug.renderFile(layout, config);
  return writeFile(output, html, 'utf8');
}

module.exports = {
  mapToArray,
  generate,
}
