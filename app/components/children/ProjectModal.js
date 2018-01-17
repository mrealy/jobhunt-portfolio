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
        console.log(e.target, "clicked on e");
        if(e.target.className == 'row') {
            this.hideModal();   
            console.log("row true");
        } else
        if(e.target.id == 'project-modal-close') {
            this.hideModal();
            console.log("project-modal-close true");
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
                    <div className="main-tools">
                        <p> Primary technologies </p>
                        <ul>
                            {project.main_tools.map(function(tool, i){
                                return <li key={i}>{tool}</li>
                            })}
                        </ul>
                    </div>
                    <p className="expand"> Click for more details </p>
                </div>
        }
        return (
            <span>
            {projectTile}
            <div id="modal" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
                {/*<span className="modal-close" onClick={(e) => this.hideModal(e)}>X</span>*/}
                {this.props.content}
            </div>
            </span>
        );
    }
}
export default ProjectModal