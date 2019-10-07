import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions'; 

export default (state = {}, action) => {
    Object.freeze(state); 
    // debugger; 
    switch(action.type) {
        case RECEIVE_PROJECTS: {
            return Object.assign({}, action.projects)
        }
        case RECEIVE_PROJECT: {
            return Object.assign({}, state, {[action.project.id]: action.project})
        }
        default: 
            return state; 
    }
}