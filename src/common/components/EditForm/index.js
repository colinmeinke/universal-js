import React, { PropTypes } from 'react';

import Button from '../Button';
import Input from '../Input';

import coreStyles from './core.css';

const propTypes = {
  action: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

const EditForm = ({ action, inputName, inputPlaceholder, onSubmit }) => (
  <form
    action={ action }
    className={ coreStyles.form }
    onSubmit={ onSubmit }
  >
    <Input
      name={ inputName }
      placeholder={ inputPlaceholder }
    />
    <Button
      text="Save"
      type="submit"
      updatingText="Saving"
    />
  </form>
);

EditForm.propTypes = propTypes;

export default EditForm;
