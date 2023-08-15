import React, { Component } from 'react';

class NoteCard extends Component {
    render () {
        return (
            <li className="list-group-item">
                <h3>{this.props.title}</h3>
                <p>{this.props.message}</p>
            </li>
        );
    }
}

export default NoteCard;