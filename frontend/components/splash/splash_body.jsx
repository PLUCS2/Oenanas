import React from 'react'; 

class SplashBody extends React.Component {
    render() {
        return (
            <div className="splash-page-body">
                <h1 className="welcome-page-header">Welcome to Oenana</h1>
                <h3>Oenana helps to manage your projects: organize your work, stress free.</h3>

                <div className="welcome-page-descriptions">
                    <label >Organize Teams
                        <h6>Add co-workers to teams and easily share projects and tasks.</h6>
                    </label>

                    <label >Breakdown Projects
                        <h6>Coordinate projects through simple interphase and automated emails, helping individuals manage deadlines and projects run smoothly.</h6>
                    </label>

                    <label >Meet Goals
                        <h6>Track team progress and deadlines, watch projects move forward in manageable pieces.</h6>
                    </label>

                </div>
            </div>
        )
    }
}

export default SplashBody; 