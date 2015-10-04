import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import EditForm from '../components/edit-form/EditForm';

let debounce;

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
  onChange ( value ) {
    clearTimeout( debounce );
    debounce = setTimeout(() => {
      this.props.updateName( value );
    }, 500 );
  }

  render () {
    return (
      <EditForm
        action="/"
        history={ this.props.history }
        isUpdating={ this.props.isUpdating }
        name="name"
        onChange={ value => { this.onChange( value )}}
        placeholder="Your name..."
        value={ this.props.name }
      />
    );
  }
}

Edit.propTypes = propTypes;

export default Edit;
