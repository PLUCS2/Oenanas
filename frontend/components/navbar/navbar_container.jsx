import React from 'react'; 
import { connect } from 'react-redux'; 
import NavBar from './navbar'; 
import { logoutUser } from '../../actions/session_actions'; 

const mapStateToProps = state => {

    const user = state.entities.users[state.session.currentUserId] || {}
    // debugger; 
    
    return{
        user: user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: user => dispatch(logoutUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)