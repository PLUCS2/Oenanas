import React from 'react';
import { Link } from 'react-router-dom'; 
import LoginContainer from '../session/login_container'; 

class SplashHeader extends React.Component {
    render() {
        return (
        <div className="splash-header">
            <Link to="/login">Login</Link>
            <Link to="/signup">Try For Free</Link>
        </div>
        )
    }
}

export default SplashHeader; 