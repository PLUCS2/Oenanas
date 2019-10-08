import React from 'react'; 

class EditProject extends React.Component {
    
    constructor(props) {
        super(props); 
        // debugger; 
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.updateProject(this.state)
    }

    handleChange(field){
        return (e) => {
            e.preventDefault(); 
            this.setState({[field]: e.target.value})
        }
    }

    render () {
        return(
            <div className="login-form-container">
                <h1 className="edit-form-header">Project Details</h1>
                <button className="modal-x" onClick={this.props.closeModal}>X</button>
                <form className="edit-form-modal">
                    <label>Name 
                        <br></br><input className="edit-project-input" type="text" value="TITLE OF PROJECT WHEN PARAMS ARE PASSED" onChange={this.handleChange("name")}/>
                    </label>

                    <label>Owned By 
                        <h6>PUT INITIALS HERE</h6>
                    </label>

                    <label>Description
                        <br></br><input className="edit-project-input" type="text" value="DESCRIPTION WHEN PARAMS ARE PASSED" onChange={this.handleChange("name")}/>
                    </label>

                    <button className="auth-form-submit" type="submit" onClick={this.handleSubmit}>Make Changes</button>
                </form>
            </div>
        )
    }

}

export default EditProject;