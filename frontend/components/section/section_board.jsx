import React from 'react'; 
import SectionBoardElement from './section_board_element'; 
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class SectionBoard extends React.Component {

    constructor(props) {
        super(props); 
        // debugger; 
        this.state = {
            order: this.props.sections.order || []
        }
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        // debugger; 
        this.props.fetchSections({project_id: this.props.projectId}).then(object => {
            // debugger; 
            this.stateSetter(object.sections.order)
        });
    }

    stateSetter(orders){
        this.setState({ order: orders }); 
        // debugger;
    }

    onDragEnd(result) {
        // debugger; 
        if (!result.destination) {
            return;
        }

        let start = this.state.order.slice(0); 
        let end = this.state.order.slice(0); 

        let oldIdx = result.source.index; 
        let newIdx = result.destination.index; 
        let id = result.draggableId;
        let a = start.slice(0, oldIdx).concat(end.slice((oldIdx + 1), end.length));
        a.splice(newIdx, 0, `${id}`)

        // debugger; 

        this.setState({
            order: a
        })

    }

    componentWillUnmount() {
        // debugger; 
        this.props.newOrder({update_order: this.state.order}); 
    }

    render() {

        // debugger;

        let updateId; 
        // debugger; 
        if (this.props.sections.order && (this.state.order.length > this.props.sections.order.length)){
            updateId = this.props.sections.order
        } else {
            updateId = this.state.order
        }

        const idArray = updateId || []; 
        const sectionsInOrder = idArray.map(id => {
            return(
                this.props.sections[id]
            )
        })

        // debugger; 

        const sections = sectionsInOrder.map((section, idx) => {
            // debugger; 
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