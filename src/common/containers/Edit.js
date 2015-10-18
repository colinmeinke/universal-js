import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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

const Edit = props => (
  <DocumentTitle title="Edit your name">
    <EditForm
      action="/"
      isUpdating={ props.isUpdating }
      name="name"
      onChange={ props.updateName }
      placeholder="Your name..."
      pushState={ props.pushState }
      value={ props.name }
    />
  </DocumentTitle>
);

Edit.propTypes = propTypes;

const EditContainer = connect( state => ({
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
export default EditContainer;
