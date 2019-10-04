import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container'; 
import SignupContainer from '../session/signup_container'; 
import { receiveErrors } from '../../actions/session_actions';


function Modal ({ modal, closeModal, receiveErrors }) {
    if(!modal){
        return null 
    }

    let component; 
    switch (modal) {
        case 'login': {
            component = <LoginContainer />;
            break;
        }
        case 'signup': {
            component = <SignupContainer />;
            break; 
        }
        default: 
            return null; 
    }

    receiveErrors([]); 

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        receiveErrors: errors => dispatch(receiveErrors(errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)