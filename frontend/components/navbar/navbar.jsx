import React from 'react'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        // this.state = {
        //     currentUser: this.props.user
        // }
    }

    render() {
        return (
            <div className="home-nav-bar">
                <h2>THIS IS THE HOME NAV BAR</h2>
                {/* <h3>{this.state.currentUser}</h3> */}
                <button type="submit" onClick={this.props.logoutUser.bind(this)}>Logout</button>
            </div>
        ); 
    }
}

export default NavBar; 