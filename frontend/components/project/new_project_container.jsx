import React from 'react'; 
import { connect } from 'react-redux'; 
import NewProject from './new_project'; 
import { makeProject } from '../../actions/project_actions'; 

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(makeProject(project))
    }
}

export default connect(null, mapDispatchToProps)(NewProject); 