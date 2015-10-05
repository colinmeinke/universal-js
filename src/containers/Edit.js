import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import EditForm from '../components/edit-form/EditForm';

const propTypes = {
  history: PropTypes.object.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

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

const ConnectedEdit = connect( state => ({
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
}))( Edit );

export { Edit };
export default ConnectedEdit;
