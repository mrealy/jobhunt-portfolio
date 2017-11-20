import React from 'react';

class Expand extends React.Component {
    render() {
        return (
            <div id="modal-content">
                <h1> {this.props.project.title} </h1>
                <h3> Project Links </h3>
                <span>
                <a href={this.props.project.github} target="blank"> Github link </a>
                |
                <a href={this.props.project.heroku} target="blank"> Open app </a>
                </span>
            </div>
        )
    }
}

export default Expand