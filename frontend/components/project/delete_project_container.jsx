import { connect } from 'react-redux'; 
import { deleteProject } from '../../actions/project_actions'; 
import DeleteProject from './delete_project'; 
import { closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {

    const project = state.entities.projects[state.ui.modal.props]; 

    return {
        project
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: project => dispatch(deleteProject(project)), 
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProject); 