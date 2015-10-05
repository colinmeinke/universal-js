import React, { Component, PropTypes } from 'react';

import * as coreStyle from '../styles/components/page';
import * as themeStyle from '../styles/themes/oaxaca/components/page';

const defaultProps = {
  language: 'en',
  scripts: [],
  styles: [],
};

const propTypes = {
  description: PropTypes.string,
  html: PropTypes.string,
  language: PropTypes.string,
  scripts: PropTypes.array,
  state: PropTypes.string,
  styles: PropTypes.array,
  title: PropTypes.string,
};

class Page extends Component {
  render () {
    const scripts = [];
    const styles = [];

    this.props.scripts.forEach(( script, i ) => {
      scripts.push(
        <script key={ i } src={ script } />
      );
    });

    this.props.styles.forEach(( style, i ) => {
      styles.push(
        <link href={ style } key={ i } rel="stylesheet" />
      );
    });

    return (
      <html
        lang={ this.props.language }
        style={{
          ...( coreStyle.html || {}),
          ...( themeStyle.html || {}),
        }}
      >
        <head>
          <meta charSet="utf-8" />
          <meta
            content="ie=edge"
            httpEquiv="x-ua-compatible"
          />
          <title>{ this.props.title }</title>
          <meta
            content={ this.props.description }
            name="description"
          />
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          { styles }
        </head>
        <body
          style={{
            ...( coreStyle.body || {}),
            ...( themeStyle.body || {}),
          }}
        >
          <section
            className="app"
            dangerouslySetInnerHTML={{ __html: this.props.html }}
            style={{
              ...( coreStyle.container || {}),
              ...( themeStyle.container || {}),
            }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${ JSON.stringify( this.props.state )};` }}
          />
          { scripts }
        </body>
      </html>
    );
  }
}

Page.defaultProps = defaultProps;

Page.propTypes = propTypes;

export default Page;
