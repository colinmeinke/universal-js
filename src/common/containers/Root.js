if ( __DEVELOPMENT__ ) {
  module.exports = require( './development/Root' );
} else {
  module.exports = require( './production/Root' );
}
