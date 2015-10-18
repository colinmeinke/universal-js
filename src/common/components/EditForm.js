import React, { PropTypes } from 'react';

import Button from './Button';
import Input from './Input';

import * as coreStyle from '../styles/components/edit-form';
import * as themeStyle from '../styles/themes/oaxaca/components/edit-form';

const propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  pushState: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const EditForm = props => (
  <form
    action={ props.action }
    onSubmit={ e => {
      e.preventDefault();
      props.pushState( null, props.action );
    }}
    style={{
      ...( coreStyle.form || {}),
      ...( themeStyle.form || {}),
    }}
  >
    <Input
      name={ props.name }
      onChange={ props.onChange }
      placeholder={ props.placeholder }
      value={ props.value }
    />
    <Button
      isUpdating={ props.isUpdating }
      text="Save"
      type="Submit"
      updatingText="Saving"
    />
  </form>
);

EditForm.propTypes = propTypes;

export default EditForm;
