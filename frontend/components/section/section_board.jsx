import React from 'react'; 
import SectionBoardElement from './section_board_element'; 
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class SectionBoard extends React.Component {

    constructor(props) {
        super(props); 
        // debugger; 
        this.state = {
            order: Object.keys(this.props.sections)
        }
        this.onDragEnd = this.onDragEnd.bind(this);
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

    onDragEnd(result) {
        debugger; 
        if (!result.destination) {
            return;
        }

        const arr = this.state.order.slice(0); 
        debugger; 

        this.setState({
            order: arr.splice(result.destination.index, 0, arr.splice(result.source.index,1)[0])
        })

    }

    render() {

        debugger;

        const idArray = this.state.order || Object.keys(this.props.sections); 
        const sections = Object.values(this.props.sections).map((section, idx) => {
            debugger; 
            return (
                <Draggable draggableId={section.id} index={idx} key={section.id}>
                    {(provided) => (
                        <div className="column-boardview" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                            <SectionBoardElement 
                            section={section} 
                            otherProps={this.props} 
                            prevId={Object.keys(this.props.sections)[idArray.indexOf(`${section.id}`)-1]}
                            {...provided.dragHandleProps}/> 
                        </div>
                    )}
                </Draggable>
            )
        })

        // debugger; 

        return (
        // <div className="main board-body">
        <>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-columns" direction="horizontal">
                    { (provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {sections}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext >
        {/* </div> */}
        </>
        )
    }
}

export default SectionBoard; 