import { showTask, updateTask, createTask, destroyTask, allTasks } from '../util/task_api_utils'; 

export const RECEIVE_TASK = "RECEIVE_TASK"; 
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS"; 

export const receiveTask = task => {
    return {
        type: RECEIVE_TASK, 
        task
    }
}

export const receiveTasks = tasks => {
    return {
        type: RECEIVE_ALL_TASKS, 
        tasks 
    }
}

export const fetchTask = id => dispatch => {
    return showTask(id).then(task => dispatch(receiveTask(task)))
}

export const editTask = task => dispatch => {
    return updateTask(task).then(task => dispatch(receiveTask(task)))
}

export const makeTask = task => dispatch => {
    return createTask(task).then(task => dispatch(receiveTask(task)))
}

export const deleteTask = id => dispatch => {
    return destroyTask(id).then(tasks => dispatch(receiveTasks(tasks)))
}

export const fetchTasks = projectId => dispatch => {
    return allTasks(projectId).then(tasks => dispatch(receiveTasks(tasks)))
}

