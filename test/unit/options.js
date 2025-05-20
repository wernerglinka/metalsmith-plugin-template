/* eslint-env node,mocha */
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import plugin from '../../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('Plugin Options', function () {
  it('should accept default options', function () {
    const pluginInstance = plugin();
    assert.strictEqual(typeof pluginInstance, 'function');
  });
  
  it('should accept custom options', function () {
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