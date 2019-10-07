import React from 'react'; 
import { Link } from 'react-router-dom'; 

class HomeSidebar extends React.Component {

    constructor(props) {
        super(props); 
        this.showSideBar = this.showSideBar.bind(this); 
    }

    showSideBar(e) {
        e.preventDefault(); 
        document.getElementById("sidebar-content").classList.toggle("show-home-sidebar");
        document.getElementById("sidebar-button").classList.toggle("on-sidebar-button");
        document.getElementById("sidebar-button-on").classList.toggle("sidebar-button-on");
    }

    render () {
        return(
            <div className="sidebar"> 
                <button onClick={this.showSideBar} id="sidebar-button" className="side-bar-button"><img id="sidebar-button-on" className="sidebar-list-image" src={window.sideBarIcon} /></button>
                <div id="sidebar-content" className="side-bar-content">
                    <div className="side-bar-logo-container"><img className="asana-side-bar-logo" src={window.sideBarLogo} /><h4 className="oenana-sidebar-logo">Oenana</h4></div>
                    <Link to="/home" className="side-bar-link">Home</Link>
                </div>
            </div>
        )
    }
}

export default HomeSidebar; 