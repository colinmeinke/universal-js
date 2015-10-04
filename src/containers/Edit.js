import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import EditForm from '../components/edit-form/EditForm';

const propTypes = {
  history: PropTypes.object,
  name: PropTypes.string,
  updateName: PropTypes.func,
};

@connect( state => ({
  isUpdating: state.isUpdating,
  name: state.name,
}), dispatch => ({
  updateName: name => {
    dispatch( requestUpdate());
    setTimeout(() => {
      dispatch( updateName( name ));
      dispatch( completeUpdate());
    }, 500 );
  },
}))

class Edit extends Component {
  render () {
    return (
      <EditForm
        action="/"
        history={ this.props.history }
        isUpdating={ this.props.isUpdating }
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
