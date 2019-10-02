import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/root'; 

document.addEventListener("DOMContentLoaded", () => {
    let store; 

    // window.dispatch = store.dispatch; 

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