import React, { PropTypes } from 'react';
import { changePageTo } from 'universal-redux-router';
import { connect } from 'react-redux';

import Button from '../Button';
import Input from '../Input';

import baseStyles from './base.css';

const propTypes = {
  action: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const onSubmit = ({ dispatch, e, name }) => {
  e.preventDefault();
  dispatch( changePageTo([ '/', { name }]));
};

const EditForm = ({ action, dispatch, inputName, inputPlaceholder, name }) => (
  <form
    action={ action }
    className={ baseStyles.form }
    method="GET"
    onSubmit={ e => onSubmit({ dispatch, e, name })}
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

EditForm.propTypes = propTypes;

const mapStateToProps = ({ name }) => ({ name });

export { EditForm };
export default connect( mapStateToProps, null )( EditForm );
