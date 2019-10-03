import React from 'react'; 
import { connect } from 'react-redux'; 
import NavBar from './navbar'; 
import { logoutUser, fetchCurrentUser } from '../../actions/session_actions'; 

const mapStateToProps = state => {

    // debugger; 
    const user = state.entities.users[state.session.currentUserId] || null
    // debugger; 
    
    return{
        user: user, 
        currentUserId: state.session.currentUserId 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: user => dispatch(logoutUser(user)), 
        fetchCurrentUser: id => dispatch(fetchCurrentUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)