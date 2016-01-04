import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateUrl } from 'universal-redux-router';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import EditForm from '../components/EditForm';

const propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const Edit = ({ isUpdating, name, onChange, onSubmit }) => (
  <DocumentTitle title="Edit your name">
    <EditForm
      action="/"
      isUpdating={ isUpdating }
      name="name"
      onChange={ onChange }
      onSubmit={ onSubmit }
      placeholder="Your name..."
      value={ name }
    />
  </DocumentTitle>
);

Edit.propTypes = propTypes;

const mapStateToProps = state => ({
  isUpdating: state.isUpdating,
  name: state.name,
});

const mapDispatchToProps = dispatch => ({
  onChange: name => {
    dispatch( requestUpdate());
    setTimeout(() => {
      dispatch( updateName( name ));
      dispatch( completeUpdate());
    }, 500 );
  },
  onSubmit: e => {
    e.preventDefault();
    window.history.pushState({}, '', '/' );
    dispatch( updateUrl( '/' ));
  },
});

const EditContainer = connect( mapStateToProps, mapDispatchToProps )( Edit );

export { Edit };
export default EditContainer;
