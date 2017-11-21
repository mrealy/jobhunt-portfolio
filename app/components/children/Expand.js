import React from 'react';

class Expand extends React.Component {
    render() {
        var link = this.props.project.contributor_githubs;
        return (
            <div id="modal-content">
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
                <p> {this.props.project.contribution} </p>
                <h4> Other Contributors </h4>
                <p> {this.props.project.contributors.map(function(name, i){
                        return <a href={link[i]} target="blank" key={i}> {name} </a>
                    })} 
                </p>
                
            </div>
        )
    }
}

export default Expand