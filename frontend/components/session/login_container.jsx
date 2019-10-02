import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)), 
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign Up
            </button>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login)