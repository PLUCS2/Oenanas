import { RECEIVE_SECTION, RECEIVE_ALL_SECTIONS } from '../actions/section_actions'; 

export default (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type){
        case RECEIVE_ALL_SECTIONS: {
            return Object.assign({}, action.sections)
        }
        case RECEIVE_SECTION: {
            return Object.assign({}, state, {[action.project.id]: action.project})
        }
        default: 
            return state; 
    }
}