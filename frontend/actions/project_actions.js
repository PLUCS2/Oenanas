import { fetchProject, fetchProjects, destroyProject, editProject, createProject } from '../util/project_api_utils'; 
import { receiveCurrentUser } from './session_actions'; 

export const RECEIVE_PROJECT = "RECEIVE_PROJECT"; 
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS"; 

export const receiveProject = project => {
    // debugger; 
    return {
        type: RECEIVE_PROJECT, 
        project
    }
}

export const receiveProjects = projects => {
    // debugger; 
    return {
        type: RECEIVE_PROJECTS, 
        projects
    }
}

export const makeProject = project => dispatch => {
    return createProject(project).then(project => dispatch(receiveProject(project)))
}

export const showProject = id => dispatch => {
    return fetchProject(id).then(project => dispatch(receiveProject(project)))
}

export const allProjects = () => dispatch => {
    return fetchProjects().then(projects => dispatch(receiveProjects(projects)))
}

export const deleteProject = id => dispatch => {
    return destroyProject(id).then(user => dispatch(receiveCurrentUser(user)))
}

export const updateProject = project => dispatch => {
    return editProject(project).then(project => dispatch(receiveProject(project)))
}