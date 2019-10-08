import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/root'; 
import { showSection, createSection, updateSection, destroySection } from './util/section_api_utils'; 
import { showTask, createTask, updateTask, destroyTask } from './util/task_api_utils'; 

document.addEventListener("DOMContentLoaded", () => {
    let store; 

    //TESTTTTINNNNGGGGG
        window.showSection = showSection;
        window.createSection = createSection;
        window.updateSection = updateSection;
        window.destroySection = destroySection;
        window.showTask = showTask;
        window.createTask = createTask; 
        window.updateTask = updateTask; 
        window.destroyTask = destroyTask; 
    //TESTTTTINNNNGGGGG

    // user auth - if there is a current user, lets set the session current user to current user 
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUserId: window.currentUser.id
            },
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            }
        }
        store = configureStore(preloadedState); 
        // debugger; 
        delete window.currentUser; 
    } else {
        store = configureStore(); 
    }

    window.getState = store.getState; 
    
    const root = document.getElementById("root"); 
    ReactDOM.render(<Root store={store} />, root)
})