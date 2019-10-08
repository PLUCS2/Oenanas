import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import HomeSidebaContainer from '../home_side_bar/home_sidebar_container';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.projectDropdown = this.projectDropdown.bind(this);
        this.closeProjectDropdown = this.closeProjectDropdown.bind(this);
    }

    componentDidMount() {
        this.props.showProject(this.props.project.id)
    }

    projectDropdown(e) {
        e.preventDefault();
        // debugger; 
        document.getElementById("project-name-dropdown").classList.toggle("show-projects");
        if (document.getElementById("hover-project-effect").className === "hide-hover") {
            document.getElementById("hover-project-effect").className = "hover-project-effect"
        } else {
            document.getElementById("hover-project-effect").className = "hide-hover"
        };
        document.addEventListener("click", this.closeProjectDropdown);
    }

    closeProjectDropdown(e) {
        e.preventDefault();
        if (!e.target.matches(".project-name-dropdown")) {
            // debugger; 
            document.getElementById("project-name-dropdown").className = "project-name-dropdown";
            // debugger; 
            document.getElementById("hover-project-effect").className = "hover-project-effect";
            document.removeEventListener("click", this.closeProjectDropdown);
        }
    }

    render() {
        // debugger; 
        return (
            <div className="page">
                <NavBarContainer />
                <HomeSidebaContainer />
                <div id="main" className="main">
                    <div className="project-heading">
                        <img className="list-image-header" src={window.listWig} />
                        <div className="project-name"><h1>{this.props.project.title}<img className="project-dropdown-image" src={window.projectNameDropdown} onClick={this.projectDropdown} /></h1>
                            <div className="hover-project-effect" id="hover-project-effect">Project Actions</div></div>
                        <div className="project-name-dropdown" id="project-name-dropdown">
                            <ul className="project-name-dropdown-list">
                                <li className="drop-modal-li"><button className="drop-modal-edit-delete" onClick={() => this.props.openModal({ modal: 'edit-project', props: this.props.project.id })}>Edit Project</button></li>
                                <li><button className="drop-modal-edit-delete delete" onClick={() => this.props.openModal({ modal: 'delete-project', props: this.props.project.id })}>Delete Project</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="under-border"></div>


                </div>

            </div>
        )
    }
}

export default ProjectList; 