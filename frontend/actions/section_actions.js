import { destroySection, updateSection, createSection, showSection, allSections, updateOrder } from '../util/section_api_utils'; 

export const RECEIVE_ALL_SECTIONS = "RECEIVE_ALL_SECTIONS"; 
export const RECEIVE_SECTION = "RECEIVE_SECTION"; 
export const CLEAR_SECTIONS = "CLEAR_SECTIONS"; 

export const receiveSections = sections => {
    // debugger; 
    return {
        type: RECEIVE_ALL_SECTIONS, 
        sections
    }
}

export const receiveSection = section => {
    return {
        type: RECEIVE_SECTION, 
        section
    }
}

export const clearSections = () => {
    return {    
        type: CLEAR_SECTIONS
    }
}

export const deleteSection = id => dispatch => {
    return destroySection(id).then(sections => dispatch(receiveSections(sections)))
}

export const editSection = section => dispatch => {
    return updateSection(section).then(sections => dispatch(receiveSections(sections)))
}

export const makeSection = section => dispatch => {
    return createSection(section).then(section => dispatch(receiveSection(section)))
}

export const fetchSection = id => dispatch => {
    return showSection(id).then(section => dispatch(receiveSection(section)))
}

export const fetchSections = projectId => dispatch => {
    return allSections(projectId).then(sections => dispatch(receiveSections(sections)))
}

export const newOrder = arrOrder => dispatch => {
    return updateOrder(arrOrder).then(sections => dispatch(receiveSections(sections)))
}