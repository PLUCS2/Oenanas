import React from 'react'; 
import { connect } from 'react-redux'; 
import ProjectBoard from './project_board'; 
import { deleteProject, updateProject, showProject } from '../../actions/project_actions'; 

const mapStateToProps = (state, ownProps) => {
    // debugger; 
    let project = state.entities.projects[ownProps.match.params.projectId]
    return {
        project: project
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: project => dispatch(deleteProject(project)), 
        updateProject: project => dispatch(updateProject(project)), 
        showProject: project => dispatch(showProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard); 

