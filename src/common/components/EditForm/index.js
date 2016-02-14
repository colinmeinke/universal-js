import React, { Component, PropTypes } from 'react';
import { changePageTo } from 'universal-redux-router';

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

class EditForm extends Component {
  onSubmit ( e ) {
    e.preventDefault();
    this.props.dispatch( changePageTo([ '/', { name: this.props.name }]));
  }

  render () {
    return (
      <form
        action={ this.props.action }
        className={ baseStyles.form }
        method="GET"
        onSubmit={ e => this.onSubmit( e )}
      >
        <Input
          name={ this.props.inputName }
          placeholder={ this.props.inputPlaceholder }
        />
        <Button
          text="Done"
          type="submit"
          updatingText="Saving"
        />
      </form>
    );
  }
}

EditForm.propTypes = propTypes;

export default EditForm;
