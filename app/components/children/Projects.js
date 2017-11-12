import React from 'react';
import projects from '../../API/projects';

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = projects;
    }
    render() {
        return (
            <div>
                <p> Projects page </p>
            </div>
        );
    }   
}

export default Projects