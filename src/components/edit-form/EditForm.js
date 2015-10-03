import React, { Component, PropTypes } from 'react';

import Button from '../button/Button';
import Input from '../input/Input';

import * as coreStyle from './style';
import * as themeStyle from '../../themes/oaxaca/components/edit-form.js';

const propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.object,
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
          text="Save"
          type="Submit"
        />
      </form>
    );
  }
}

EditForm.propTypes = propTypes;

export default EditForm;
