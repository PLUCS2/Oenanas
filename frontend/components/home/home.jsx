import React from 'react'; 
import NavBarContainer from '../navbar/navbar_container'; 

class Home extends React.Component {

    constructor(props) {
        super(props); 
        this.dropProjects = this.dropProjects.bind(this); 
    }

    componentDidMount() {
        this.props.allProjects(); 
    }

    dropProjects(e) {
        e.preventDefault();
        // debugger; 
        document.getElementById("home-page-projects").classList.toggle("show");
        document.getElementById("header-image").classList.toggle("turn"); 
        // debugger; 
    }

    render() {
        // debugger; 
        const project = this.props.projects.map(project => {
            // debugger; 
            if (project.default_view === "list" ){
                return (
                    <li key={project.id} className="project-list-item">
                        <img className="list-image" src={window.listWig} /><br></br>
                        {project.title}
                    </li>
            )} else {
                return (
                    <li key={project.id} className="project-list-item">
                        <img className="board-image" src={window.boardWig} /><br></br>
                        {project.title}
                    </li>
            )}
        })

        return(
            <div className="home-page">
                <NavBarContainer /> 

            <div className="recent-dropdown">
                    <button className="home-page-heading" onClick={this.dropProjects}><img id="header-image" className="home-header turn" src={window.homeHeader} />Recent Projects</button>
                <div id="home-page-projects" className="home-page-projects show">
                    <ul className="projects-list"> 
                        {project}
                    </ul>  
                </div>
            </div>
            </div>
        )
    }
}

export default Home; 