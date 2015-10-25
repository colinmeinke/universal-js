if ( __DEVELOPMENT__ ) {
  module.exports = require( './development/configureStore' );
} else {
  module.exports = require( './production/configureStore' );
}
