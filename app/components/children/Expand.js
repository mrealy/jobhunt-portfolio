import React from 'react';
var screenshots = [];


class Expand extends React.Component {
    render() {
        var link = this.props.project.contributor_githubs;
        var id = this.props.project.id;
        return (
            <div className="row">
            <div id="no-content" className="col-md-2" />
            <div id="modal-content" className="col-md-8">
                <h1> {this.props.project.title} </h1>
                <h4> Project Links </h4>
                <span>
                    <a href={this.props.project.github} target="blank"> Github link </a>
                    |
                    <a href={this.props.project.heroku} target="blank"> Open app </a>
                </span>
                <h4> Role: {this.props.project.role} </h4>
                <h4> Tools: {this.props.project.tools} </h4>
                <h4> Description </h4>
                <p> {this.props.project.description} </p>
                <h4> Contribution </h4>
                <ul>
                    {this.props.project.contribution.map(function(task, t){
                        return <li key={t}>{task}</li>
                    })}
                </ul>
                <h4> Screenshots </h4>
                <div className="row">
                    {this.props.project.screenshots.map(function(pic, p) {
                        return (
                            <div key={p} className="col-md-4 project-img-border">
                                <a href="#" data-dismiss="modal" data-toggle="modal" data-target={"#" + id + p}>
                                    <img className="project-image" src={pic} />
                                </a>
                    
                                <div className="modal fade" id={id + p} tabIndex="-1" role="dialog" aria-labelledby="imgModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content img-modal-content">
                                            <div className="modal-body">
                                                <img className="modal-img" src={pic} />                                            
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}     
                </div>
                <h4> Other Contributors </h4>
                <ul> {this.props.project.contributors.map(function(name, i){
                        return <li key={i}> {name} <br /></li>
                    })}  
                </ul>
                
            </div>
            <div id="no-content" className="col-md-2" />
            </div>
        )
    }
}

export default Expand