import React from 'react'; 
import { Link } from 'react-router-dom'; 

class HomeSidebar extends React.Component {
    render () {
        return(
            <div className="sidebar"> 
                <img className="list-image" src={window.sideBarIcon} />
                
            </div>
        )
    }
}

export default HomeSidebar; 