import React from 'react';

class ProjectsTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }

    }
    
    render() {
        var project = this.props.project
        var setBackground = {
            // backgroundImage: 'url(' + project.screenshots[0] + ')'
            '--project-bg-img': 'url(' + project.screenshots[0] + ')'
        }
        return (
            <div className="project-tile" style={ setBackground }>
                <h2>{project.title}</h2>
                <div className="expand">
                    <h3> Role: {project.role}</h3>
                    <p> {project.short} </p>    
                </div>
                <p> Primary technologies </p>
                <ul>
                    {project.main_tools.map(function(tool, i){
                        return <li key={i}>{tool}</li>
                    })}
                </ul>
                <p className="expand"> Click for more details </p>
            </div>
        )
    }
}

export default ProjectsTile