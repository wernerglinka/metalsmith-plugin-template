<!--
TEMPLATE INSTRUCTIONS:
1. Replace "metalsmith-plugin-name" with your actual plugin name throughout this file
2. Replace "[describe functionality]" with a brief description of what your plugin does
3. Update the Features section with actual features
4. Update the Options table with your plugin's actual options
5. Replace placeholder examples with real-world use cases
6. Update all URLs in the badge definitions at the bottom
7. The coverage badge will be automatically updated by GitHub Actions
-->

# metalsmith-plugin-name

A Metalsmith plugin to [describe functionality]

[![metalsmith:plugin][metalsmith-badge]][metalsmith-url]
[![npm: version][npm-badge]][npm-url]
[![license: MIT][license-badge]][license-url]
[![coverage][coverage-badge]][coverage-url]
[![ESM/CommonJS][modules-badge]][npm-url]
[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-plugin-name/badge.svg)](https://snyk.io/test/npm/metalsmith-plugin-name)

## Features

- Feature 1: [Description]
- Feature 2: [Description]
- Feature 3: [Description]
- **ESM and CommonJS support**:
  - ESM: `import pluginName from 'metalsmith-plugin-name'`
  - CommonJS: `const pluginName = require('metalsmith-plugin-name')`

## Installation

```bash
npm install metalsmith-plugin-name
```

## Usage

Pass `metalsmith-plugin-name` to `metalsmith.use`:

```js
import Metalsmith from 'metalsmith';
import pluginName from 'metalsmith-plugin-name';

Metalsmith(__dirname)
  .use(pluginName()) // default options
  .use(
    pluginName({
      // with custom options
      key: 'customKey',
      optionalFlag: true,
      enumOption: 'option2'
    })
  )
  .build((err) => {
    if (err) throw err;
  });
```

### Options

| Option         | Description                         | Type      | Default     |
| -------------- | ----------------------------------- | --------- | ----------- |
| `key`          | Description of the key option       | `String`  | `'key'`     |
| `optionalFlag` | Description of the optional flag    | `Boolean` | `false`     |
| `enumOption`   | One of option1, option2, or option3 | `String`  | `'option1'` |

## Examples

### Basic Usage

```js
import Metalsmith from 'metalsmith';
import pluginName from 'metalsmith-plugin-name';

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(pluginName())
  .build((err) => {
    if (err) throw err;
    console.log('Build completed!');
  });
```

### Advanced Configuration

```js
import Metalsmith from 'metalsmith';
import pluginName from 'metalsmith-plugin-name';

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(
    pluginName({
      key: 'customKey',
      optionalFlag: true,
      enumOption: 'option2'
    })
  )
  .build((err) => {
    if (err) throw err;
    console.log('Build completed with custom options!');
  });
```

## Debug

To enable debug logs, set the `DEBUG` environment variable to `metalsmith-plugin-name*`:

```javascript
metalsmith.env('DEBUG', 'metalsmith-plugin-name*');
```

## CLI Usage

To use this plugin with the Metalsmith CLI, add `metalsmith-plugin-name` to the `plugins` key in your `metalsmith.json` file:

```json
{
  "plugins": [
    {
      "metalsmith-plugin-name": {
        "key": "customKey",
        "optionalFlag": true
      }
    }
  ]
}
```

## License

MIT

[npm-badge]: https://img.shields.io/npm/v/metalsmith-plugin-name.svg
[npm-url]: https://www.npmjs.com/package/metalsmith-plugin-name
[metalsmith-badge]: https://img.shields.io/badge/metalsmith-plugin-green.svg?longCache=true
[metalsmith-url]: https://metalsmith.io
[license-badge]: https://img.shields.io/github/license/wernerglinka/metalsmith-plugin-name
[license-url]: LICENSE
[coverage-badge]: https://img.shields.io/badge/test%20coverage-95%25-brightgreen
[coverage-url]: #test-coverage
[modules-badge]: https://img.shields.io/badge/modules-ESM%2FCJS-blue
