import { connect } from 'react-redux'; 
import EditProject from './edit_project'; 
import { closeModal } from '../../actions/modal_actions'; 
import { updateProject } from '../../actions/project_actions'; 

const mapStateToProps = (state, ownProps) => {
    // debugger; 
    // let project = state.entities.project[ownProps.match.params.projectId]; 
    return {
        // project 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()), 
        updateProject: project => dispatch(updateProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject); 