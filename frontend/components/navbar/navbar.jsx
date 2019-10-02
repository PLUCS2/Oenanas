import React from 'react'; 

class NavBar extends React.Component {

    render() {
        return (
            <div className="home-nav-bar">
                <h2>THIS IS THE HOME NAV BAR</h2>
                <button type="submit" onClick={this.props.logoutUser.bind(this)}>Logout</button>
            </div>
        ); 
    }
}

export default NavBar; 