import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'; 
import Signup from './signup'; 

const mapDispatchToProps = dispatch => {
    return{
        signupUser: user => dispatch(signupUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup); 