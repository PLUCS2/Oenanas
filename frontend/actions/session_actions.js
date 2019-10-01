import { login, logout, signup } from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"; 

export const receiveCurrentUser = user => {
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
    return {
        type: RECEIVE_ERRORS, 
        errors
    }
}

export const loginUser = user => dispatch => {
    login(user).then(user => dispatch(receiveCurrentUser(user)))
}

export const logoutUser = () => dispatch => {
    logout().then(() => dispatch(logoutCurrentUser()))
}

export const signupUser = user => dispatch => {
    signup(user).then(user => dispatch(receiveCurrentUser(user)))
}
