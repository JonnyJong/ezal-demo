const { writeFile, mkdir, access, constants } = require('fs/promises');
const { render } = require('ezal');
const path = require('path');

async function generate(layout, options, output) {
  let html = await render.pug(layout, options);
  let { dir } = path.parse(output);
  await access(dir).catch(()=>mkdir(dir, { recursive: true }));
  return writeFile(output, html, 'utf-8');
}

module.exports = {
  generate,
}
