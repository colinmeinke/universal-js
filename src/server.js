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

if ( __DEVELOPMENT__ ) {
  const webpack = require( 'webpack' );
  const webpackConfig = require( '../webpack/dev/client.babel' ).default;
  const WebpackDevServer = require( 'webpack-dev-server' );

  new WebpackDevServer( webpack( webpackConfig ), {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    proxy: {
     '*': 'http://localhost:3000/',
    },
  }).listen( 3001, 'localhost' );
}

const scripts = config[ __DEVELOPMENT__ ? 'development' : 'production' ].scripts
  .map( script => `/${ config.dir.js }/${ script.file.split( '/' ).pop() }` );

const styles = config[ __DEVELOPMENT__ ? 'development' : 'production' ].styles
  .map( style => `/${ config.dir.css }/${ style.split( '/' ).pop() }` );

const app = express();

app.use( favicon( path.join(
  __dirname, '..', config.dir.static, config.dir.images, 'favicon.ico'
)));

app.use( express.static( path.join( __dirname, '..', config.dir.static )));

const render = ({ url }, res ) => {
  configureStore({ isServer: true, url }).then( store => {
    res.write( '<!DOCTYPE html>' );

    renderToStaticMarkup(
      <Page
        app={ renderToString( <Root store={ store } /> )}
        scripts={ scripts }
        styles={ styles }
        title={ DocumentTitle.rewind() }
      />
    ).pipe( res );
  }).catch( console.error.bind( console ));
};

app.use( render );

app.listen( process.env.PORT || 3000 );
