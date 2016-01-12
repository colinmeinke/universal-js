import { connect } from 'react-redux';

import { updateName } from '../actions/name';
import { completeUpdate, requestUpdate } from '../actions/isUpdating';

import Input from './Input/index';

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

export default connect( mapStateToProps, mapDispatchToProps )( Input );
