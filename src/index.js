/**
 * Plugin options
 * @typedef {Object} Options
 * @property {String} key - Description of the key property
 * @property {Boolean} [optionalFlag=false] - An optional flag with default value
 * @property {('option1'|'option2'|'option3')} [enumOption='option1'] - Option with enumerated values
 */

/** @type {Options} */
const defaults = {
  key: 'key',
  optionalFlag: false,
  enumOption: 'option1'
};

/**
 * Normalize plugin options
 * @param {Options} [options] - User provided options
 * @returns {Options} - Normalized options with defaults applied
 */
function normalizeOptions(options) {
  return Object.assign({}, defaults, options || {});
}

/**
 * Process a file
 * @param {Object} file - The file object
 * @param {String} path - The file path
 * @param {Options} options - The plugin options
 * @returns {Object} - The processed file
 */
function processFile(file, path, options) {
  // Example operation - replace with actual implementation
  if (options.optionalFlag) {
    file.processedWithOptions = true;
  }

  return file;
}

/**
 * A Metalsmith plugin to [describe functionality]
 *
 * @param {Options} [options] - Plugin options
 * @returns {import('metalsmith').Plugin} - Metalsmith plugin function
 */
function pluginName(options) {
  options = normalizeOptions(options);

  return function pluginName(files, metalsmith, done) {
    const debug = metalsmith.debug ? metalsmith.debug('metalsmith-plugin-name') : () => {};
    debug('Running with options: %O', options);

    try {
      // Process all files
      Object.entries(files).forEach(([filepath, file]) => {
        // Example filtering logic - customize as needed
        if (filepath.endsWith('.html')) {
          processFile(file, filepath, options);
          debug(`Processed file: ${filepath}`);
        }
      });

      // Synchronous operation - call done directly
      done();
    } catch (err) {
      done(new Error(`metalsmith-plugin-name error: ${err.message}`));
    }
  };
}

// Set function name for debugging
// Not using Object.defineProperty because we're using a named function

export default pluginName;
