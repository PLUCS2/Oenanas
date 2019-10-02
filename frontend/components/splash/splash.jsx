import React from 'react'; 
// import { Link } from 'react-router-dom'; 
import SplashBody from './splash_body_container'; 
import SplashHeader from './splash_header_container'; 
import SplashFooter from './splash_footer_container'; 

class Splash extends React.Component {
    
    render() {
        return (
        <div className="splash-page-pieces">
            <SplashHeader /> 
            <SplashBody /> 
            <SplashFooter /> 
        </div>
        ); 
    }
}

export default Splash; 