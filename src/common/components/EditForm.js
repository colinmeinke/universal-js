import { connect } from 'react-redux'

import EditForm from './EditForm/index'

const mapStateToProps = ({ name }) => ({ name })

export default connect(mapStateToProps, null)(EditForm)
