import { RECEIVE_TASK, RECEIVE_ALL_TASKS } from '../actions/task_actions'; 

export default (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_ALL_TASKS: {
            return Object.assign({}, action.tasks)
        }
        case RECEIVE_TASK: {
            return Object.assign({}, state, {[action.task.id]: action.task})
        }
        default: 
            return state; 
    }
}