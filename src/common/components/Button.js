import { connect } from 'react-redux';

import Button from './Button/index';

const mapStateToProps = ({ isUpdating }) => ({ isUpdating });

export default connect( mapStateToProps )( Button );
