import React from 'react';
import projects from '../../API/projects';
import ProjectModal from './ProjectModal';
import Expand from './Expand';

console.log(projects);

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: projects,
            expand: false
        }
    }
    renderProject() {
        return this.state.projects.map(function(project, index) {
            return (
                <div key={index} className="col-md-4">
                    <ProjectModal project={project} openbtn={true} content={<Expand project={project}/>} />                    
                </div>
            )
        }.bind(this));
    }
    render() {
        return (
            <div className="main-container">
                <div className="row"> 
                    {this.renderProject()}
                </div>
                {this.props.children}
            </div>
        );
    }   
}

export default Projects