---
title: Hello World
date: 2023-05-21 16:20:00
tags:
  - foo
categories:
  - foo
  - bar
---

# Welcome
Ezal is a simple blog framework.

## Document
[English Document](https://github.com/JonnyJong/ezal/blob/main/docs/english.md)
[中文文档](https://github.com/JonnyJong/ezal/blob/main/docs/chinese.md)

## Use
Install Ezal.
```bash
npm init
npm install --save chokidar
npm install --save highlight.js
npm install --save live-server
npm install --save marked
npm install --save pug
npm install --save stylus
npm install --save yaml
npm install --save ezal
```

Add in `package.json`.
```json package.json
{
  "scripts": {
    "init": "node ./node_modules/ezal/dist/main.js init",
    "build": "node ./node_modules/ezal/dist/main.js",
    "serve": "node ./node_modules/ezal/dist/main.js serve",
    "clean": "node ./node_modules/ezal/dist/main.js clean"
  }
}
```

Init the project.
```bash
npm run init
```

Done.

## Build
```bash
npm install
npm install -g typescript
tsc
```

## Run
```bash
npm run serve
```

## Clean
```bash
npm run clean
```
