/* eslint-env node,mocha */
const assert = require('node:assert');
const path = require('node:path');
const Metalsmith = require('metalsmith');
const plugin = require('../lib/index.cjs');

function fixture(p) {
  return path.resolve(__dirname, 'fixtures', p);
}

// Test CommonJS integration
describe('metalsmith-plugin-name (CommonJS)', function () {
  it('should export a function', function () {
    assert.strictEqual(typeof plugin, 'function');
  });
  
  it('should work with CommonJS require', function (done) {
    Metalsmith(fixture('default'))
      .use(plugin())
      .build(function (err) {
        if (err) done(err);
        assert.strictEqual(err, null);
        done();
      });
  });
});