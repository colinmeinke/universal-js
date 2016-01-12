import { connect } from 'react-redux';

import Home from './Home/index';

const mapStateToProps = ({ name }) => ({ name });

export default connect( mapStateToProps )( Home );
