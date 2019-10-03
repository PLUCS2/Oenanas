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
                <div className="logo-holder">
                    <img className="asana-logo" src={window.asanaLogo} />
                    <h4 className="oenana-logo">Oenana</h4>
                </div>
                <button className="login-header" onClick={() => this.props.openModal('login')}>Log In</button>
                <button className="try-for-free" onClick={() => this.props.openModal('signup')}>Try for free</button>
            </nav>
        </div>
        )
    }
}

export default SplashHeader; 