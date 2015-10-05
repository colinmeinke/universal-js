import React, { Component, PropTypes } from 'react';

import Button from './Button';
import Input from './Input';

import * as coreStyle from '../styles/components/edit-form';
import * as themeStyle from '../styles/themes/oaxaca/components/edit-form';

const propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.object,
  isUpdating: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

class EditForm extends Component {
  onSubmit ( e ) {
    e.preventDefault();
    this.props.history.pushState( null, this.props.action );
  }

  render () {
    return (
      <form
        action={ this.props.action }
        onSubmit={ e => this.onSubmit( e ) }
        style={{
          ...( coreStyle.form || {}),
          ...( themeStyle.form || {}),
        }}
      >
        <Input
          name={ this.props.name }
          onChange={ this.props.onChange }
          placeholder={ this.props.placeholder }
          value={ this.props.value }
        />
        <Button
          isUpdating={ this.props.isUpdating }
          text="Save"
          type="Submit"
          updatingText="Saving"
        />
      </form>
    );
  }
}

EditForm.propTypes = propTypes;

export default EditForm;
