import React from 'react'; 
import { connect } from 'react-redux'; 
import SectionBoard from './section_board'; 
import { fetchSections, fetchSection, deleteSection, makeSection } from '../../actions/section_actions'; 

const mapStateToProps = (state, ownProps) => {
    // debugger; 
    //Need a component did mount to fetch all sections. 
    //Need a component will unmount that clears the sections slice of state
    return {
        sections: state.entities.sections, 
        projectId: ownProps.projectId 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSection: id => dispatch(fetchSection(id)), 
        fetchSections: projectId => dispatch(fetchSections(projectId)), 
        deleteSection: id => dispatch(deleteSection(id)), 
        makeSection: section => dispatch(makeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionBoard); 