import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'; 
import Signup from './signup'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signupUser: user => dispatch(signupUser(user)), 
        closeModal: () => dispatch(closeModal()), 
        otherForm: (
            <button className="other-modal-form" onClick={() => dispatch(openModal({modal: 'login'}))}>
                Login
            </button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 