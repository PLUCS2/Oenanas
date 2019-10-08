import React from 'react'; 

class EditProject extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = this.props.project;  
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
            this.setState({[field]: e.target.value});
        }
    }

    render () {
        return(
            <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div className="login-form-container">
                <h1 className="edit-form-header">Project Details</h1>
                <button className="modal-x" onClick={this.props.closeModal}>X</button>
                <form className="edit-form-modal">
                    <label>Name 
                        <br></br><input className="edit-project-input" type="text" value={this.props.project.title} onChange={this.handleChange("title")}/>
                    </label>

                    <label>Owned By 
                        <h6>{this.props.project.owner}</h6>
                    </label>

                    <label>Description
                        <br></br><input className="edit-project-input" type="text" value={this.props.project.description} onChange={this.handleChange("description")}/>
                    </label>

                    <button className="auth-form-submit" type="submit" onClick={this.handleSubmit}>Make Changes</button>
                </form>
            </div>
            </div>
        )
    }

}

export default EditProject;