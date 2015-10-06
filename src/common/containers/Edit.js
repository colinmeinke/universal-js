import DocumentTitle from 'react-document-title';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pushState } from 'redux-router';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import EditForm from '../components/EditForm';

const propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  pushState: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
};

class Edit extends Component {
  render () {
    return (
      <DocumentTitle title="Edit your name">
        <EditForm
          action="/"
          isUpdating={ this.props.isUpdating }
          name="name"
          onChange={ this.props.updateName }
          placeholder="Your name..."
          pushState={ this.props.pushState }
          value={ this.props.name }
        />
      </DocumentTitle>
    );
  }
}

Edit.propTypes = propTypes;

const ConnectedEdit = connect( state => ({
  isUpdating: state.isUpdating,
  name: state.name,
}), dispatch => ({
  pushState: ( ...args ) => {
    dispatch( pushState( ...args ));
  },
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
