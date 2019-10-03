import React from 'react'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        if (props.user.first_name) {
            // debugger; 
            let firstI = props.user.first_name[0];
            let secondI = props.user.last_name[0];
            let initals = firstI + secondI;
            this.state = {
                initials: initals
            } 
        } else {
            let firstI = props.user.firstName[0];
            let secondI = props.user.lastName[0];
            let initals = firstI + secondI;
            this.state = {
                initials: initals
            } 
        }
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    // }

    render() {
        return (
            <div className="home-nav-bar">
                <h2>THIS IS THE HOME NAV BAR</h2>
                {/* <h3>{this.state.currentUser}</h3> */}

                <div className="drop-down-menu">
                    <button className="drop-button">{this.state.initials}</button>
                    <div className="drop-content"><button className="logout" type="submit" onClick={this.props.logoutUser.bind(this)}>Logout</button></div>
                </div>

            </div>
        ); 
    }
}

export default NavBar; 