import React from 'react'; 
import { Route } from 'react-router-dom'; 
import SignUpContainer from './session/signup_container'; 
import SplashContainer from './splash/splash_container'; 
import LoginContainer from './session/login_container'; 
import HomeContainer from './home/home_container'; 
import NewProjectContainer from './project/new_project_container'; 
import ProjectBoardContainer from './project/project_board_container'; 
import ProjectListContainer from './project/project_list_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_utils'; 
import Modal from './splash/modal'; 

export default () => {
    return(
        <div>
            <Modal /> 
            <AuthRoute exact path="/" component={SplashContainer} />
            {/* <AuthRoute exact path="/signup" component={SignUpContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />  */}
            <ProtectedRoute exact path="/home" component={HomeContainer} /> 
            <ProtectedRoute exact path="/projects/:projectId/list" component={ProjectListContainer} /> 
            <ProtectedRoute exact path="/projects/:projectId/board" component={ProjectBoardContainer} />
            <ProtectedRoute exact path="/project/new" component={NewProjectContainer} /> 
        </div>    
    );
}

