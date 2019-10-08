import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container'; 
import SignupContainer from '../session/signup_container'; 
import { receiveErrors } from '../../actions/session_actions';
import EditProjectContainer from '../project/edit_project_container'; 
import DeleteProjectContainer from '../project/delete_project_container';


function Modal ({ modal, closeModal, receiveErrors, props }) {
    if(!modal){
        return null 
    }

    // debugger; 

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
        case 'edit-project': {
            // debugger; 
            component = <EditProjectContainer {...props}/>;
            break; 
        }
        case 'delete-project': {
            component = <DeleteProjectContainer {...props} />; 
            break; 
        }
        default: 
            return null; 
    }

    receiveErrors([]); 

    return (
        <div className="modal-background" onClick={closeModal}>
            {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
                {component}
            {/* </div> */}
        </div>
    )
}


const mapStateToProps = state => {
    // debugger; 
    return {
        modal: state.ui.modal.modal, 
        props: state.ui.modal.props
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        receiveErrors: errors => dispatch(receiveErrors(errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)