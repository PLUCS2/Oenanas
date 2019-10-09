import React from 'react'; 
import SectionBoardElement from './section_board_element'; 
import { DragDropContext } from 'react-beautiful-dnd';

class SectionBoard extends React.Component {

    constructor(props) {
        super(props); 
        // debugger; 
        this.state = {
            order: Object.keys(this.props.sections)
        }
    }

    componentDidMount() {
        // debugger; 
        this.props.fetchSections({project_id: this.props.projectId}).then(object => {
            // debugger; 
            this.stateSetter(Object.keys(object.sections))
        });
    }

    stateSetter(orders){
        this.setState({ order: orders }); 
        // debugger;
    }

    render() {

        // debugger;

        const idArray = Object.keys(this.props.sections); 
        const sections = Object.values(this.props.sections).map(section => {
            // debugger; 
            return (
                <div key={section.id} className="column-boardview">
                    <SectionBoardElement 
                    section={section} 
                    otherProps={this.props} 
                    prevId={Object.keys(this.props.sections)[idArray.indexOf(`${section.id}`)-1]}/> 
                </div>
            )
        })

        // debugger; 

        return (
            <>
                {sections}
            </>
        )
    }
}

export default SectionBoard; 