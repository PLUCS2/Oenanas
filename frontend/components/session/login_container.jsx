import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login'; 

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)