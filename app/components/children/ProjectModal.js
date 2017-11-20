import React from 'react';

class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
    }

    componentWillMount() {
        this.props.openbtn || this.showModal();
    }

    showModal() {
        this.setState({ display: 'block' });
    }
    
    hideModal() {
        this.setState({ display: 'none' });
    }

    closeOnBackground(e) {
        if(e.target.id == 'modal') {
            this.hideModal();
        }
    }

    render() {
        var project = this.props.project;
        if (this.props.openbtn) { 
            var projectTile = 
                <div className="project-tile" onClick={(e) => this.showModal(e)} >
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
        }
        return (
            <span>
            {projectTile}
            <div id="modal" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
                <span className="modal-close" onClick={(e) => this.hideModal(e)}>X</span>
                {this.props.content}
            </div>
            </span>
        );
    }
}
export default ProjectModal