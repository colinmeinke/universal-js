import React, { PropTypes } from 'react';
import { changePageTo } from 'universal-redux-router';

import Button from '../Button';
import Input from '../Input';

import baseStyles from './base.css';

const propTypes = {
  action: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

const EditForm = ({ action, dispatch, inputName, inputPlaceholder, name }) => {
  const onSubmit = e => {
    e.preventDefault();
    dispatch( changePageTo([ '/', { name }]));
  };

  return (
    <form
      action={ action }
      className={ baseStyles.form }
      method="GET"
      onSubmit={ onSubmit }
    >
      <Input
        name={ inputName }
        placeholder={ inputPlaceholder }
      />
      <Button
        text="Done"
        type="submit"
        updatingText="Saving"
      />
    </form>
  );
};

EditForm.propTypes = propTypes;

export default EditForm;
