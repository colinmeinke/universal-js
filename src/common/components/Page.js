import React, { PropTypes } from 'react';

import * as coreStyle from '../styles/components/page';
import * as themeStyle from '../styles/themes/oaxaca/components/page';

const defaultProps = {
  language: 'en',
  scripts: [],
  styles: [],
};

const propTypes = {
  app: PropTypes.string,
  description: PropTypes.string,
  initialState: PropTypes.object,
  language: PropTypes.string,
  scripts: PropTypes.array,
  styles: PropTypes.array,
  title: PropTypes.string,
};

const Page = ({ app, description, initialState, language, scripts, styles, title }) => (
  <html
    lang={ language }
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
      <title>{ title }</title>
      <meta
        content={ description }
        name="description"
      />
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      { styles.map(( style, i ) => {
        return <link href={ style } key={ i } rel="stylesheet" />
      })}
    </head>
    <body
      style={{
        ...( coreStyle.body || {}),
        ...( themeStyle.body || {}),
      }}
    >
      <section
        className="app"
        dangerouslySetInnerHTML={{ __html: app }}
        style={{
          ...( coreStyle.app || {}),
          ...( themeStyle.app || {}),
        }}
      />
      <script
        dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${ JSON.stringify( initialState )};` }}
      />
      { scripts.map(( script, i ) => {
        return <script key={ i } src={ script } />
      })}
    </body>
  </html>
);

Page.defaultProps = defaultProps;
Page.propTypes = propTypes;

export default Page;
