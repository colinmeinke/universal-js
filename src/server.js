import DocumentTitle from 'react-document-title';
import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom-stream/server';

import config from './common/config';
import configureStore from './common/store/configureStore';

import Root from './common/components/Root';
import Page from './common/components/Page';

const scripts = config[ __DEVELOPMENT__ ? 'development' : 'production' ].scripts
  .map( script => `/${ config.dir.js }/${ script.file.split( '/' ).pop() }` );

const styles = config[ __DEVELOPMENT__ ? 'development' : 'production' ].styles
  .map( style => `/${ config.dir.css }/${ style.split( '/' ).pop() }` );

const app = express();

app.use( favicon( path.join(
  __dirname, '..', config.dir.static, config.dir.images, 'favicon.ico'
)));

app.use( express.static( path.join( __dirname, '..', config.dir.static )));

if ( __DEVELOPMENT__ ) {
  const webpackConfig = require( '../webpack/dev/client.babel' ).default;
  const compiler = require( 'webpack' )( webpackConfig );

  app.use( require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use( require( 'webpack-hot-middleware' )( compiler ));
}

const render = ({ url }, res ) => {
  const store = configureStore({ isServer: true, url });

  res.write( '<!DOCTYPE html>' );

  renderToStaticMarkup(
    <Page
      app={ renderToString( <Root store={ store } /> )}
      scripts={ scripts }
      styles={ styles }
      title={ DocumentTitle.rewind() }
    />
  ).pipe( res );
};

app.use( render );

app.listen( process.env.PORT || 3000 );
