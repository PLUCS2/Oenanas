import React from 'react'; 
import { Route } from 'react-router-dom'; 
import SignUpContainer from './session/signup_container'; 
import SplashContainer from './splash/splash_container'; 
import LoginContainer from './session/login_container'; 
import HomeContainer from './home/home_container'; 

export default () => {
    return(
        <div>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} /> 
            <Route exact path="/home" component={HomeContainer} /> 
        </div>    
    );
}

