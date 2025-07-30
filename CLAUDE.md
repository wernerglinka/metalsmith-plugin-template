# Metalsmith Plugin Development Context

This is a Metalsmith plugin following Werner Glinka's standards and conventions. This context helps AI assistants understand the project structure and development practices.

## Project Overview

**Plugin Purpose**: [Describe what this plugin does - update this when creating a new plugin]

**Architecture**: This is a Metalsmith plugin that processes files during the static site generation pipeline.

## Key Files and Structure

- `src/index.js` - Main plugin implementation
- `lib/` - Built code (ESM and CommonJS versions)
- `test/` - Test files and fixtures
- `test/fixtures/` - Test input/output directories
- `README.md` - Documentation following standardized format

## Development Standards

### Code Style
- **Language**: JavaScript (ES modules, no TypeScript)
- **Paradigm**: Functional programming patterns
- **Testing**: Mocha test framework
- **Documentation**: JSDoc comments for complex functions

### Plugin Architecture
```javascript
// Standard Metalsmith plugin pattern
export default function pluginName(options = {}) {
  return function(files, metalsmith, done) {
    // Plugin logic here
    done();
  };
}
```

### Key Conventions
- Use ESM exports (`export default`)
- Support both ESM and CommonJS via microbundle
- Follow functional programming patterns
- Use descriptive variable names (no abbreviations)
- Return errors via callback, don't throw

## Testing Requirements

- **Coverage Target**: 80%+ line coverage
- **Test Types**: Unit tests for options, integration tests for file processing
- **Test Files**: `test/index.js` (main), `test/cjs.test.cjs` (CommonJS), `test/unit/` (units)
- **Fixtures**: Use `test/fixtures/` with input/expected directories

## Build and Release

### Available Scripts
- `npm test` - Run all tests with coverage
- `npm run build` - Build ESM and CommonJS versions
- `npm run lint` - Fix code style issues
- `npm run release:patch|minor|major` - Release using GitHub CLI

### Release Process
- Uses `release-it` with GitHub CLI authentication
- Automatically generates changelog from commit messages
- Creates GitHub releases with release notes
- Requires GitHub CLI: `gh auth login`

## Dependencies

### Core Dependencies
- **metalsmith** - Peer dependency (^2.5.0)

### Dev Dependencies
- **microbundle** - Builds ESM/CJS versions
- **mocha** - Test runner
- **c8** - Coverage reporting
- **eslint** - Code linting
- **release-it** - Automated releases

## Metalsmith Context

### How Metalsmith Works
1. Reads source files into memory as `files` object
2. Applies plugins in sequence to transform `files`
3. Writes transformed files to destination

### Plugin Development Tips
- `files` object: keys are file paths, values are file objects with `contents` and metadata
- Always call `done()` callback (with error if needed)
- Use `metalsmith.metadata()` for global metadata
- Test with realistic file fixtures
- Handle edge cases (empty files, missing properties)

### Common Patterns
```javascript
// Process specific file types
Object.keys(files).forEach(filepath => {
  if (!filepath.endsWith('.md')) return;
  // Process markdown files
});

// Add metadata to files
files[filepath] = {
  ...files[filepath],
  customProperty: 'value'
};

// Error handling
if (someError) {
  return done(new Error('Descriptive error message'));
}
```

## Debug Information

Set `DEBUG=metalsmith:plugin-name` environment variable to enable debug output.

## Resources

- [Metalsmith Documentation](https://metalsmith.io/)
- [Plugin Standards](https://github.com/wernerglinka/metalsmith-plugins)
- [Werner Glinka's Plugin Examples](https://github.com/wernerglinka?tab=repositories&q=metalsmith)