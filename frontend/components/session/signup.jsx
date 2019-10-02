import React from 'react'; 

class Signup extends React.Component {

    constructor(props) {
        super(props); 
        // debugger; 
        this.state = {
            email: '', 
            first_name: '', 
            last_name: '', 
            password: '', 
            role: ''
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
        // debugger; 
        e.preventDefault; 
        this.props.signupUser({ user: this.state }).then(() => this.props.closeModal()); 
        // then( () => this.props.history.push('/home'))
    }

    render() {
        return(
        <div className="signup-form">

            <h1 className="auth-form-header">
                Sign Up! 
            </h1>

            <form>

                <label>First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleInput("first_name")}/>
                </label>

                <label>Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleInput("last_name")} />
                </label>

                <label>Role
                    <input type="text" value={this.state.role} onChange={this.handleInput("role")} />
                </label>

                <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                </label>

                <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                </label>

                <button type="submit" onClick={this.handleSubmit}>Submit</button>

            </form>

            <button onClick={this.props.closeModal}>X</button>
            {this.props.otherForm} 

        </div>
        );
    }
}

export default Signup; 