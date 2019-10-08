import React from 'react';
import { Redirect } from 'react-router-dom'; 

class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            email: '', 
            password: ''
        }

        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.loginDemo = this.loginDemo.bind(this); 
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
            e.target.className = "auth-form-user-input"; 
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        // debugger; 
        this.props.loginUser({user: this.state}).then(() => this.props.closeModal()); 
        // .then(() => this.props.history.push('/home'))
    }

    loginDemo(e) {
        e.preventDefault(); 
        this.props.loginUser({ user: { email: 'demo@demo.com', password: '12345678' } }).then(() => this.props.closeModal()); 
    }

    // beginInput(field) {
    //     return (e) => {
    //         this.setState({ [field]: '' })
    //     }
    // }

    render() {
        // if (this.state.currentUser){
        //     <Redirect to="/home" /> 
        // }

        const error = this.props.errors.map((error,idx) => {
            return <li key={idx} className="errors" >{error}</li>
        }); 

        return(
        <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div className="login-form-container">

                <h1 className="auth-form-header">
                    Log in 
                </h1>

                <form className="login-form">

                    <ul>{error}</ul> 

                    <label className="auth-form-label">Email Address: 
                        <br></br><input className="auth-form-input" placeholder="name@company.com" type="email" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>

                    <label className="auth-form-label">Password:
                        <br></br><input className="auth-form-input" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>

                    <button className="auth-form-submit" type="submit" onClick={this.handleSubmit}>Login</button>

                </form>
                
                    <button className="other-modal-form" onClick={this.loginDemo}>Demo User</button>

                <button className="modal-x" onClick={this.props.closeModal}>X</button>
                <h3 className="auth-messages">Don't have an account?{this.props.otherForm} </h3>
                
            </div>
        </div>
        )
    }
}

export default Login; 