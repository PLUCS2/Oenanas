import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

class DeleteProject extends React.Component {

    constructor(props){
        super(props); 
        this.handleDelete = this.handleDelete.bind(this); 
    }

    handleDelete(e) {
        e.preventDefault(); 
        this.props.deleteProject(this.props.project.id).then(() => this.props.history.push('/home')); 
        this.props.closeModal();
    }

    render() {
        return (
        <div className="modal-delete-child" onClick={e => e.stopPropagation()}>
            <div className="delete-container">
                <h1 className="delete-form-header">Delete the {this.props.project.title} project?</h1>
                <button className="modal-delete-x" onClick={this.props.closeModal}>X</button>
                <p className="delete-words">
                    This will delete the project, along with the following: <br></br>
                        * Any unassigned tasks that are only in this project <br></br>
                        * Any custom fields local to the project <br></br>
                </p>
                <div className="cancel-and-delete-button-container">
                    <button className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
                    <button className="delete-button" onClick={this.handleDelete}>Delete {this.props.project.title}</button>
                </div>
            </div>
        </div>
        )
    }

}

export default withRouter(DeleteProject); 