import React from 'react'; 

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

    checker(field) {
       return (e) => {
           this.setState({default_view: field})
        //    debugger; 
       }
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
            // debugger; 
        }
    }

    handleSubmit(e) {
        e.preventDefault; 
        this.props.createProject({project: this.state}).then(() => this.props.history.push('/home')); 
    }

    render() {
        return (
        <div className="new-project-form-container"> 

            <form className="new-project-form">

                <label>Project name
                    <input type="text" value={this.state.title} onChange={this.handleInput("title").bind(this)} />
                </label>

                <label>Description 
                    <input type="text" value={this.state.description} onChange={this.handleInput("description").bind(this)} />
                </label>

                <div className="list-board-selector">
                    <label>Default view</label>
                    <label>List
                        <input type="radio" id="list" value={'list'} checked={this.state.default_view === "list"} onChange={this.checker('list').bind(this)} />
                    </label>

                    <label>Board
                        <input type="radio" id="board" value={'board'} checked={this.state.default_view === "board"} onChange={this.checker('board').bind(this)}/>
                    </label>

                </div>

                <button type="submit" disabled={this.state.title.length < 1} onClick={this.handleSubmit}>Create Project</button>
            </form>

        </div>
        ); 
    }
}

export default NewProject; 