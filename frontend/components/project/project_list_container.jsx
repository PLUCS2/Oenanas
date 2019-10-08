import { connect } from 'react-redux'; 
import { deleteProject, updateProject, showProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions'; 
import ProjectList from './project_list'; 

const mapStateToProps = (state, ownProps) => {
    // debugger; 
    let project = state.entities.projects[ownProps.match.params.projectId] || { title: '', id: ownProps.match.params.projectId, created_at: '' }
    return {
        project: project
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: project => dispatch(deleteProject(project)),
        updateProject: project => dispatch(updateProject(project)),
        showProject: project => dispatch(showProject(project)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList); 