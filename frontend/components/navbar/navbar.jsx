import React from 'react'; 
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        if (props.user.first_name) {
            // debugger; 
            let firstI = props.user.first_name[0];
            let secondI = props.user.last_name[0];
            let initals = firstI + secondI;
            let userName = props.user.first_name + " " + props.user.last_name; 
            this.state = {
                initials: initals, 
                userName: userName
            } 
        } else {
            let firstI = props.user.firstName[0];
            let secondI = props.user.lastName[0];
            let initals = firstI + secondI;
            let userName = props.user.firstName + " " + props.user.lastName; 
            this.state = {
                initials: initals, 
                userName: userName
            } 
        }

        this.toggleFunction = this.toggleFunction.bind(this); 
        this.closeLogout = this.closeLogout.bind(this); 
        this.toggleAdds = this.toggleAdds.bind(this); 
        this.closeAdds = this.closeAdds.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    // }

    toggleFunction(e) {
        e.preventDefault(); 
        document.getElementById("click-effect").classList.toggle("show"); 
        if (document.getElementById("hover-effect").className === "hide") {
            document.getElementById("hover-effect").className = "drop-content"
        } else {
            document.getElementById("hover-effect").className = "hide"
        }; 
        document.addEventListener("click", this.closeLogout);
    }

    toggleAdds(e) {
        e.preventDefault(); 
        // debugger; 
        document.getElementById("add-drop-content").classList.toggle("show"); 
        // debugger; 
        document.addEventListener("click", this.closeAdds); 
    }

    closeAdds(e) {
        e.preventDefault(); 
        // debugger; 
        if(!e.target.matches(".add-new")) {
            document.getElementById("add-drop-content").className = "add-drop-content"; 
            document.removeEventListener("click", this.closeAdds); 
            // debugger; 
        }
    }

    closeLogout(e) {
        e.preventDefault();
        if(!e.target.matches(".drop-down-menu")){
            // debugger; 
            document.getElementById("click-effect").className = "clicked-drop-content"; 
            // debugger; 
            document.getElementById("hover-effect").className = "drop-content";
            document.removeEventListener("click", this.closeLogout); 
        }
    }

    render() {
        return (
            <div className="home-nav-bar">
                {/* <h2>THIS IS THE HOME NAV BAR</h2> */}
                {/* <h3>{this.state.currentUser}</h3> */}
                <div className="add-new">
                    <button className="plus-button" onClick={this.toggleAdds}>+</button>
                    <div className="add-drop-content" id="add-drop-content">
                        <Link to="/project/new">Project</Link>
                    </div>
                </div>


                <div className="drop-down-menu">
                    <button className="drop-button" onClick={this.toggleFunction}>{this.state.initials}</button>
                    <div className="drop-content" id="hover-effect">{this.state.userName}</div>
                    <div className="clicked-drop-content" id="click-effect">
                        <button className="logout" type="submit" onClick={this.props.logoutUser.bind(this)}>Logout</button>
                    </div>
                </div>

            </div>
        ); 
    }
}

export default NavBar; 