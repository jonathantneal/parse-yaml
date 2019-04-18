# parse-yaml [<img src="https://jonathantneal.github.io/node-logo.svg" alt="" width="90" height="90" align="right">][parse-yaml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[parse-yaml] is a 10.8 kB “[zero-dependency](#zero-dependency)” module for
parsing [YAML] and [Front Matter], powered by the cores of [js-yaml] and
[front-matter].

```bash
npm install parse-yaml
```

## parseAsYaml

The `parseAsYaml` function parses a string as YAML.

```js
const { parseAsYaml } = require('parse-yaml');

parseAsYaml(`title: This is my first post.
description: This is a post on My Blog about agile frameworks.
date: 2018-05-01
tags:
  - another-tag
layout: layouts/post.njk`);
```

#### parseAsYaml Output

```json
{
  "title": "This is my first post.",
  "description": "This is a post on My Blog about agile frameworks.",
  "date": "2018-05-01T00:00:00.000Z",
  "tags": [
    "another-tag"
  ],
  "layout": "layouts/post.njk"
}
```

### parseAsYaml Options

See https://github.com/nodeca/js-yaml#safeload-string---options-

## parseAsFrontMatter

The `parseAsFrontMatter` function parses a string as Front Matter.

```js
const { parseAsFrontMatter } = require('parse-yaml');

parseAsFrontMatter(`---
title: This is my first post.
description: This is a post on My Blog about agile frameworks.
date: 2018-05-01
tags:
  - another-tag
layout: layouts/post.njk
---
<main>
  {{ content | safe }}
</main>
`);
```

#### parseAsFrontMatter Output

```json
{
  "attributes": {
    "title": "This is my first post.",
    "description": "This is a post on My Blog about agile frameworks.",
    "date": "2018-05-01T00:00:00.000Z",
    "tags": [
      "another-tag"
    ],
    "layout": "layouts/post.njk"
  },
  "body": "\n<main>\n  {{ content | safe }}\n</main>\n",
  "frontmatter": "---\ntitle: This is my first post.\ndescription: This is a post on My Blog about agile frameworks.\ndate: 2018-05-01\ntags:\n  - another-tag\nlayout: layouts/post.njk\n---"
}
```

### parseAsFrontMatter Options

See https://github.com/jxson/front-matter#fmstring

## Zero Dependency

Only a quarter of the functionality from [js-yaml] and [front-matter] is
required to parse YAML and Front Matter. These portions are bundled.

## Licensing

All functionality imported from [js-yaml] and [front-matter] is MIT licensed.
https://github.com/nodeca/js-yaml

[cli-img]: https://img.shields.io/travis/jonathantneal/parse-yaml.svg
[cli-url]: https://travis-ci.org/jonathantneal/parse-yaml
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/parse-yaml.svg
[npm-url]: https://www.npmjs.com/package/parse-yaml

[Front Matter]: https://jekyllrb.com/docs/front-matter/
[front-matter]: https://www.npmjs.com/package/front-matter
[js-yaml]: https://www.npmjs.com/package/js-yaml
[parse-yaml]: https://github.com/jonathantneal/parse-yaml
[YAML]: https://yaml.org/
