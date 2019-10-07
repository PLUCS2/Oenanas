import React from 'react'; 
import Home from './home'; 
import { connect } from 'react-redux'; 
import { showProject, allProjects } from '../../actions/project_actions'; 

const mapStateToProps = state => {
    // debugger; 
    return {
        projects: Object.values(state.entities.projects)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showProject: project => dispatch(showProject(project)), 
        allProjects: projects => dispatch(allProjects(projects))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)