/* eslint-env node,mocha */
import assert from 'node:assert';
import plugin from '../../src/index.js';

describe('Plugin Options', () => {
  it('should accept default options', () => {
    const pluginInstance = plugin();
    assert.strictEqual(typeof pluginInstance, 'function');
  });

  it('should accept custom options', () => {
    const customOptions = {
      key: 'customKey',
      optionalFlag: true,
      enumOption: 'option2'
    };

    const pluginInstance = plugin(customOptions);
    assert.strictEqual(typeof pluginInstance, 'function');
  });

  // Add more option validation tests here
});
