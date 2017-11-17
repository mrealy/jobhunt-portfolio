import React from 'react';
import projects from '../../API/projects';
import ProjectsTile from './ProjectsTile';
console.log(projects);

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.onHover = this.onHover.bind(this);
        this.leaveHover = this.leaveHover.bind(this);
        this.state = {
            projects: projects,
            showDetail: false
        }
    }
    onHover = () => {
        console.log("hovering");
        this.setState({ showDetail: true });
    }
    leaveHover = () => {
        console.log("left hover");
        this.setState({ showDetail: false });
    }
    renderProject() {
        return this.state.projects.map(function(project, index) {
            return (
                <div key={index} className="col-md-4">
                    <ProjectsTile project={project}/>
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