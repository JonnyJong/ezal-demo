---
title: Markdown Test
date: 2023-05-21 16:22:00
tags:
  - foo
  - bar
categories:
  - foo
---

# Basic

**bold text**

*italicized text*

> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

`ezal`

[Ezal Project Repository]([/](https://github.com/JonnyJong/ezal))

![Hello World](/imgs/hello_world.jpg)

~~Strikethrough~~

---

# Heading
## H2
### H3

# Table
| Type        | Example     |
| ----------- | ----------- |
| Code        | `ezal`      |
| Bold        | **bold**    |

# Code Block
```js
function mapToArray(map) {
  let array = [];
  map.forEach((items, name)=>{
    array.push([name, items]);
  });
  return array;
}
```

# Tasks
- [x] Done
- [ ] Undone
