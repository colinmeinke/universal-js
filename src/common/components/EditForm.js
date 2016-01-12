import { connect } from 'react-redux';
import { updateUrl } from 'universal-redux-router';

import EditForm from './EditForm/index';

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    e.preventDefault();
    window.history.pushState({}, '', '/' );
    dispatch( updateUrl( '/' ));
  },
});

export default connect( null, mapDispatchToProps )( EditForm );
