import React from 'react'; 
import { Draggable } from 'react-beautiful-dnd';

class SectionBoardElement extends React.Component {

    constructor(props){
        super(props); 
        this.state = this.props.section; 
        this.changeSectionName = this.changeSectionName.bind(this); 
        // debugger; 
    }

    changeSectionName(e) {
        e.preventDefault();
        this.setState({name: e.target.value})
    }

    render() {
        return(
            <input type="text" key={this.props.section.id} className="column-heading-boardview" value={this.state.name} onChange={this.changeSectionName} />
        )
    }

}

export default SectionBoardElement;