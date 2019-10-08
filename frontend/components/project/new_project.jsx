import React from 'react'; 
import { Link } from 'react-router-dom'; 

class NewProject extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            title: '', 
            description: '', 
            default_view: 'list'
        }
        this.checker = this.checker.bind(this);
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    checker(e) {
    //    return (e) => {
    //        e.preventDefault(); 
    //        this.setState({default_view: field})
    //        debugger; 
    //    }
        e.stopPropagation(); 
        this.setState({default_view: e.target.value}); 
    }

    handleInput(field) {
        return (e) => {
            e.preventDefault(); 
            this.setState({[field]: e.target.value})
            if (field === "title" && e.target.value === ""){
                document.getElementById("title").classList.toggle("empty-error")
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createProject({project: this.state}).then(() => this.props.history.push('/home')); 
    }

    componentDidMount() {
        document.getElementById("title").focus(); 
    }

    render() {
        debugger; 
        return (
        <div>
            <Link to="/home" className="cancel-new-form-button" onClick={(e) => e.stopPropagation()}>X</Link>
        <div className="new-project-form-container"> 

            <h1 className="form-header">Add project details</h1>

            <form className="new-project-form" id="newProjectForm">

                <label className="main-labels">Project name
                    <br></br><input id="title" className="new-input-title" type="text" value={this.state.title} id="title" onChange={this.handleInput("title").bind(this)} />
                </label>

                <label className="main-labels">Description 
                    <br></br><input className="new-input-description" type="text" value={this.state.description} onChange={this.handleInput("description").bind(this)} />
                </label>

                <div className="list-board-selector">
                    <label className="main-labels">Default view</label><br></br>
                    <label className="radio-label">
                        <input type="radio" id="list" value={'list'} checked={this.state.default_view === "list"} onChange={this.checker} />
                        <img className="newproject-wig" src={window.listWig} />List
                    </label>

                    <br></br><label className="radio-label">
                        <input type="radio" id="board" value={'board'} checked={this.state.default_view === "board"} onChange={this.checker}/>
                        <img className="newproject-wig" src={window.boardWig} />Board
                    </label>

                </div>

                <button className="create-project-button" type="submit" disabled={this.state.title.length < 1} onClick={this.handleSubmit}>Create Project</button>
            </form>

                {/* puts cursor in title field on load:  */}
                {/* <script type="text/javascript">{document.newProjectForm.title.focus()}</script>  */}

        </div>
        </div>
        ); 
    }
}

export default NewProject; 