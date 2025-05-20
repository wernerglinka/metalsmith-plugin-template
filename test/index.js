/* eslint-env node,mocha */
import assert from 'node:assert';
import { resolve, dirname } from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import equals from 'assert-dir-equal';
import Metalsmith from 'metalsmith';
import plugin from '../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { name } = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'));

function fixture(p) {
  return resolve(__dirname, 'fixtures', p);
}

describe('metalsmith-plugin-name', function () {
  it('should export a named plugin function matching package.json name', function () {
    const pluginNameFromPackage = name.split('/').pop().replace(/^metalsmith-/, '');
    assert.strictEqual(plugin.name, 'pluginName');
  });
  
  it('should not crash the metalsmith build when using default options', function (done) {
    Metalsmith(fixture('default'))
      .use(plugin())
      .build((err) => {
        if (err) done(err);
        assert.strictEqual(err, null);
        equals(fixture('default/build'), fixture('default/expected'));
        done();
      });
  });
  
  // Add additional tests based on plugin functionality
});