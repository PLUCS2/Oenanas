import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'; 
import Signup from './signup'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapDispatchToProps = dispatch => {
    return{
        signupUser: user => dispatch(signupUser(user)), 
        closeModal: () => dispatch(closeModal()), 
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        )
    }
}

export default connect(null, mapDispatchToProps)(Signup); 