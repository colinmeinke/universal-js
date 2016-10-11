import React, { Component, PropTypes } from 'react'

import baseStyles from './base.css'
import themeStyles from './oaxaca-theme.css'

const defaultProps = {
  language: 'en',
  scripts: [],
  styles: []
}

const propTypes = {
  app: PropTypes.object,
  description: PropTypes.string,
  language: PropTypes.string,
  scripts: PropTypes.array,
  styles: PropTypes.array,
  title: PropTypes.string
}

class Page extends Component {
  render () {
    return (
      <html
        className={[
          baseStyles.html,
          themeStyles.html
        ].join(' ')}
        lang={this.props.language}
      >
        <head>
          <meta charSet='utf-8' />
          <meta
            content='ie=edge'
            httpEquiv='x-ua-compatible'
          />
          <title>{ this.props.title }</title>
          <meta
            content={this.props.description}
            name='description'
          />
          <meta
            content='width=device-width, initial-scale=1'
            name='viewport'
          />
          { this.props.styles.map((style, i) => (
            <link href={style} key={i} rel='stylesheet' />
          ))}
        </head>
        <body
          className={baseStyles.body}
        >
          <section
            className='app'
            dangerouslySetInnerHTML={{ __html: this.props.app }}
          />
          { this.props.scripts.map((script, i) => (
            <script key={i} src={script} />
          ))}
        </body>
      </html>
    )
  }
}

Page.defaultProps = defaultProps
Page.propTypes = propTypes

export default Page
