import { login, logout, signup } from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 

export const receiveCurrentUser = user => {
    // debugger; 
    return {
        type: RECEIVE_CURRENT_USER, 
        user 
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = errors => {
    // debugger; 
    return {
        type: RECEIVE_ERRORS, 
        errors
    }
}

export const loginUser = user => dispatch => {
   return login(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logoutUser = () => dispatch => {
    return logout().then(() => dispatch(logoutCurrentUser()))
}

export const signupUser = user => dispatch => {
    return signup(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
}
