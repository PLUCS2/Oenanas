import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            email: '', 
            password: ''
        }

        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 

    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault; 
        this.props.loginUser({user: this.state}).then( () => this.props.history.push('/home'))
    }

    render() {
        return(
            <div className="login-form-container">
                <form>

                    <label>email: 
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>

                    <label>password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>

                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login; 