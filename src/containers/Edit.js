import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { update as updateName } from '../actions/name';

import EditForm from '../components/edit-form/EditForm';

const propTypes = {
  history: PropTypes.object,
  name: PropTypes.string,
  updateName: PropTypes.func,
};

@connect( state => ({
  name: state.name,
}), dispatch => ({
  updateName: name => dispatch( updateName( name )),
}))

class Edit extends Component {
  render () {
    return (
      <EditForm
        action="/"
        history={ this.props.history }
        name="name"
        onChange={ this.props.updateName }
        placeholder="Your name..."
        value={ this.props.name }
      />
    );
  }
}

Edit.propTypes = propTypes;

export default Edit;
