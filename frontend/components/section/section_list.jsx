import React from 'react';

class SectionList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger; 
        this.props.fetchSections({ project_id: this.props.projectId });
    }

    render() {

        debugger; 
        const sections = Object.values(this.props.sections).map(section => {
            return (
                <div key={section.id} >
                    {section.name}
                </div>
            )
        })

        debugger;

        return (
            <h3>Hi, this is the section component for List
                {sections}
            </h3>

        )
    }
}

export default SectionList; 