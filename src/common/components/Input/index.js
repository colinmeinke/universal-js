import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateName } from '../../actions/name';
import { completeUpdate, requestUpdate } from '../../actions/isUpdating';

import baseStyles from './base.css';
import themeStyles from './oaxaca-theme.css';

const propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

let debounce;

const onChangeWithDebounce = ({ e, onChange }) => {
  const { value } = e.target;
  clearTimeout( debounce );
  debounce = setTimeout(() => {
    onChange( value );
  }, 500 );
};

const Input = ({ defaultValue, name, onChange, placeholder }) => (
  <input
    className={[
      baseStyles.regular,
      themeStyles.regular,
    ].join( ' ' )}
    defaultValue={ defaultValue }
    name={ name }
    onChange={ e => onChangeWithDebounce({ e, onChange })}
    placeholder={ placeholder }
  />
);

Input.propTypes = propTypes;

const mapStateToProps = ({ name }) => ({
  defaultValue: name,
});

const mapDispatchToProps = dispatch => ({
  onChange: name => {
    dispatch( requestUpdate());
    setTimeout(() => {
      dispatch( updateName( name ));
      dispatch( completeUpdate());
    }, 500 );
  },
});

export { Input };
export default connect( mapStateToProps, mapDispatchToProps )( Input );
