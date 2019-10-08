import React from 'react'; 
import NavBarContainer from '../navbar/navbar_container'; 
import HomeSidebarContainer from '../home_side_bar/home_sidebar_container'; 
import { Link } from 'react-router-dom'; 


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
                        <Link to={`projects/${project.id}/list`}><img className="list-image" src={window.listWig} /><br></br>
                            {project.title}</Link>
                    </li>
            )} else {
                return (
                    <li key={project.id} className="project-list-item">
                        <Link to={`/projects/${project.id}/board`}><img className="board-image" src={window.boardWig} /><br></br>
                            {project.title}</Link>
                    </li>
            )}
        })

        return(
            <div className="home-page">
                <NavBarContainer /> 
                <HomeSidebarContainer /> 
            {/* <div id="main" className="main"> */}
            <h1 id="main" className="main-home-page-heading">Home</h1>
                <div className="recent-dropdown">
                        <button className="home-page-heading" onClick={this.dropProjects}><img id="header-image" className="home-header turn" src={window.homeHeader} />Recent Projects</button>
                    <div id="home-page-projects" className="home-page-projects show">
                        <ul className="projects-list"> 
                            {project}
                        </ul>  
                    </div>
                </div>
            {/* </div> */}
            </div>
        )
    }
}

export default Home; 