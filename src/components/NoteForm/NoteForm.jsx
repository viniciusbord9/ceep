import React, { Component } from 'react';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.message = "";
    }

    validateTitle(event) {
        event.preventDefault();
        event.stopPropagation();
        this.title = event.target.value;
    }

    validateMessage(event) {
        event.preventDefault();
        event.stopPropagation();
        this.message = event.target.value;
    }

    saveNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.saveNote(this.title, this.message);
    }

    render() {
        return (
            <form onSubmit={this.saveNote.bind(this)}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    aria-describedby="emailHelp" 
                    placeholder="Title"
                    onChange={this.validateTitle.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows={15} id="message" onChange={this.validateMessage.bind(this)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default NoteForm;