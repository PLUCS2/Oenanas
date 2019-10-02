import React from 'react';
import { Link } from 'react-router-dom'; 
import LoginContainer from '../session/login_container'; 
// import Modal from './modal'

class SplashHeader extends React.Component {
    render() {
        return (
        <div className="splash-header">
            {/* <Modal />  */}
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Try For Free</Link> */}
            <nav className="login-signup">
                <button onClick={() => this.props.openModal('login')}>Login</button>
                <button onClick={() => this.props.openModal('signup')}>Signup</button>
            </nav>
        </div>
        )
    }
}

export default SplashHeader; 