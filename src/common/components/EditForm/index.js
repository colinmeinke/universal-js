import classNames from 'classnames';
import React, { PropTypes } from 'react';

import Button from '../Button';
import Input from '../Input';

import coreStyles from './core';

const classes = classNames( coreStyles.form );

const propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const EditForm = ({
  action,
  isUpdating,
  name,
  onChange,
  onSubmit,
  placeholder,
  value,
}) => (
  <form
    action={ action }
    className={ classes }
    onSubmit={ onSubmit }
  >
    <Input
      name={ name }
      onChange={ onChange }
      placeholder={ placeholder }
      value={ value }
    />
    <Button
      isUpdating={ isUpdating }
      text="Save"
      type="Submit"
      updatingText="Saving"
    />
  </form>
);

EditForm.propTypes = propTypes;

export default EditForm;
