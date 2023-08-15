import React, { Component } from 'react';
import NoteCard from '../NoteCard';

class NoteList extends Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.notes.map((note, index) => {
                    return (
                        <NoteCard key={index} title={note.title} message={note.message}/>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;