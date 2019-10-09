import { destroySection, updateSection, createSection, showSection, allSections } from '../util/section_api_utils'; 

export const RECEIVE_ALL_SECTIONS = "RECEIVE_ALL_SECTIONS"; 
export const RECEIVE_SECTION = "RECEIVE_SECTION"; 

export const receiveSections = sections => {
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

export const deleteSection = id => dispatch => {
    return destroySection(id).then(sections => dispatch(receiveSections(sections)))
}

export const editSection = section => dispatch => {
    return updateSection(section).then(section => dispatch(receiveSection(section)))
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