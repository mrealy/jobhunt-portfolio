import React from 'react';
import projects from '../../API/projects';
console.log(projects);
class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: projects
        }
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