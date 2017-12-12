import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';


import Note from '../Note.js';

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);
        initiate(this);
        this.state = {notes: {}};
    }
    noteContents = '';

    saveNote = (event) => {
        event.preventDefault();
        // need to send a message here if noteContents is blank.


        // this is a stupid as shit solution. If anyone has a better one let me know.
        let newNote = new Note(this.noteContents);
        let obj = {};
        obj[newNote.id] = newNote;

        updateState({
            notes: {
                ...this.state.notes || null,
                ...obj
            }
        });
    }

    captureNoteInput = (event) => {
        this.noteContents = event.target.value;
    }

    render() {
        return (
            <form onSubmit={this.saveNote}>
                Enter Your Note:
                <input id="textInput" type="text" onChange={this.captureNoteInput}/>
                <input type="submit" value="Submit" />
            </form> 
        );
    }
}

module.exports = NoteCreateForm;