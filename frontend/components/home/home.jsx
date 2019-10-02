import React from 'react'; 
import NavBarContainer from '../navbar/navbar_container'; 

class Home extends React.Component {
    render() {
        return(
            <div className="home-page">
                <NavBarContainer /> 
            </div>
        )
    }
}

export default Home; 