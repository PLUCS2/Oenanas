import React from 'react'; 

class SplashBody extends React.Component {
    render() {
        return (
        <>
            <div className="splash-page-body">
                <h1 className="welcome-page-header">Welcome to Oenana</h1>
                <h3 className="welcome-page-greeter">Oenana helps manage your projects: organize your work, stress free.</h3>

                <div className="welcome-page-descriptions">
                    <label className="description-header">Organize Teams
                        <h6 className="explanations">Add co-workers to teams and easily share projects and tasks.</h6>
                    </label>

                    <label className="description-header">Breakdown Projects
                        <h6 className="explanations">Coordinate projects through simple interphase and automated emails, helping individuals manage deadlines and projects run smoothly.</h6>
                    </label>

                    <label className="description-header">Meet Goals
                        <h6 className="explanations">Track team progress and deadlines, watch projects move forward in manageable pieces.</h6>
                    </label>

                </div>
            </div>
                <div className="background-container">
                    <img className="asana-background" src={window.asanaBackground} />
                </div>
        </>
        )
    }
}

export default SplashBody; 