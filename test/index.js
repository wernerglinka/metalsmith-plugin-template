/* eslint-env node,mocha */
import assert from 'node:assert';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import equals from 'assert-dir-equal';
import Metalsmith from 'metalsmith';
import plugin from '../src/index.js';

const __dirname = dirname( fileURLToPath( import.meta.url ) );

function fixture( p ) {
  return resolve( __dirname, 'fixtures', p );
}

describe( 'metalsmith-plugin-name', () => {
  it( 'should export a named plugin function matching package.json name', () => {
    assert.strictEqual( plugin.name, 'pluginName' );
  } );
  
  it( 'should not crash the metalsmith build when using default options', ( done ) => {
    Metalsmith( fixture( 'default' ) )
      .use( plugin() )
      .build( ( err ) => {
        if ( err ) {done( err );}
        assert.strictEqual( err, null );
        equals( fixture( 'default/build' ), fixture( 'default/expected' ) );
        done();
      } );
  } );
  
  // Add additional tests based on plugin functionality
} );