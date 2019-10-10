import React from 'react'; 
import { Draggable } from 'react-beautiful-dnd';

class SectionBoardElement extends React.Component {

    constructor(props){
        super(props); 
        this.state = this.props.section; 
        this.changeSectionName = this.changeSectionName.bind(this); 
        this.updateSecName = this.updateSecName.bind(this); 
        this.showDelete = this.showDelete.bind(this); 
        this.closeDelete = this.closeDelete.bind(this); 
        // debugger; 
    }

    changeSectionName(e) {
        e.preventDefault();
        this.setState({name: e.target.value})
    }

    updateSecName(e) {
        e.preventDefault(); 
        this.props.otherProps.editSection({section: this.state})
    }

    showDelete(e) {
        e.preventDefault(); 
        document.getElementById("drop-delete-button").className = "show-drop-delete-button";
        document.addEventListener("click", this.closeDelete); 
    }

    closeDelete(e) {
        e.preventDefault(); 
        if (!e.target.matches(".section-delete-dropdown") && e.target.nodeName != "A") {
            document.getElementById("drop-delete-button").className = "drop-delete-button";
            document.removeEventListener("click", this.closeDelete);
        }
    }

    render() {
        return(
            <>
                <input type="text" 
                key={this.props.section.id} 
                className="column-heading-boardview" 
                value={this.state.name} 
                onBlur={this.updateSecName}
                onChange={this.changeSectionName} />
            <div className="section-delete-dropdown">
                <button className="delete-section" onClick={this.showDelete}>...</button>
                    <div id="drop-delete-button" className="drop-delete-button">
                        <button>Delete Section</button>
                    </div>
            </div>
            </>
        )
    }

}

export default SectionBoardElement;