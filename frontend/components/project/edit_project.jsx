import React from 'react'; 

class EditProject extends React.Component {
    
    constructor(props) {
        super(props); 
        // debugger; 
    }

    render () {
        return(
            <div className="login-form-container">
                <h1 className="edit-form-header">Project Details</h1>
                <button className="modal-x" onClick={this.props.closeModal}>X</button>
                <form>
                    <label>Name 
                        <input type="text" value="TITLE OF PROJECT WHEN PARAMS ARE PASSED" />
                    </label>

                    <label>Owned By 
                        <h3>PUT INITIALS HERE</h3>
                    </label>

                    <label>
                        <input type="text" value="DESCRIPTION WHEN PARAMS ARE PASSED" />
                    </label>
                </form>
            </div>
        )
    }

}

export default EditProject;