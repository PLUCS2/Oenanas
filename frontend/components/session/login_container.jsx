import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {
    return {
         currentUser: state.session.currentUserId, 
         errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)), 
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button className="other-modal-form" onClick={() => dispatch(openModal({modal: 'signup'}))}>
                Sign Up
            </button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)