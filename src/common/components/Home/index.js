import DocumentTitle from 'react-document-title'
import React, { Component, PropTypes } from 'react'

import Title from '../Title'

const propTypes = {
  name: PropTypes.string.isRequired
}

class Home extends Component {
  render () {
    return (
      <DocumentTitle title={`Hello ${this.props.name}`}>
        <section>
          <Title
            text={`Hello ${this.props.name}`}
            to={[ 'edit', { name: this.props.name } ]}
          />
        </section>
      </DocumentTitle>
    )
  }
}

Home.propTypes = propTypes

export default Home
