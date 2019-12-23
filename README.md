### Install

```shell
yarn add gatsby-theme-cat
```

### Development
```shell
# dev
yarn dev

# publish
yarn deploy
```

### Usage

_gatsby-config:_
```js
plugins: [
  {
    resolve: `gatsby-theme-cat`,
    options: {
      postPath: 'posts',
      mdxExtensions: ['.mdx', '.md'],
      htmlLang: 'zh'
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'chris kwok',
      short_name: 'christian',
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: 'static/favicon.png'
    }
  }
]
```

_markdown:_
```markdown
---
title: Break the cycle
description: Love is louder than all your pain
date: 2019-12-15 22:52:00
published: true
cover: ./Arseny Togulev.jpeg
coverAuthor: Arseny Togulev
coverOriginalUrl: https://unsplash.com/photos/mnx3NlXwKdg
---

在世间，本就是各人下雪，各人有各人的隐晦和皎洁。

---
```
