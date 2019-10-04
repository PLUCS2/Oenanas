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
            e.target.className = "auth-form-user-input";
        }
    }

    handleSubmit(e) {
        // debugger; 
        e.preventDefault; 
        this.props.signupUser({ user: this.state }).then(() => this.props.closeModal()); 
        // then( () => this.props.history.push('/home'))
    }

    // beginInput(field) {
    //     return (e) => {
    //         this.setState({ [field]: '' })
    //     }
    // }

    render() {

        const error = this.props.errors.map((error, idx) => {
            return <li key={idx} className="errors" >{error}</li>
        }); 

        return(
        <div className="signup-form-container">

            <button className="modal-x" onClick={this.props.closeModal}>X</button>

            <h1 className="auth-form-header">
                Sign up
            </h1>

                <ul className="error-holder">{error}</ul>
                
            <form className="signup-form">

                {/* <div className="fl-signup-container"> */}
                    <label className="submit-form-label">First Name
                        <br></br><input className="auth-form-input" placeholder="Jane" type="text" value={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </label>

                    <label className="submit-form-label">Last Name
                        <br></br><input className="auth-form-input" placeholder="Doe" type="text" value={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </label>
                {/* </div> */}

                    <label className="submit-form-label">Role
                        <br></br><input className="auth-form-input" placeholder="CEO" type="text" value={this.state.role} onChange={this.handleInput("role")} />
                    </label>

                    <label className="submit-form-label">Email
                        <br></br><input className="auth-form-input" placeholder="name@company.com" type="email" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>

                    <label className="submit-form-label">Password
                        <br></br><input className="auth-form-input" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>


                <br/><button className="auth-form-submit" type="submit" onClick={this.handleSubmit}>Submit</button>

            </form>

            
            <h3 className="auth-messages" >Already have an account?{this.props.otherForm}</h3>

        </div>
        );
    }
}

export default Signup; 