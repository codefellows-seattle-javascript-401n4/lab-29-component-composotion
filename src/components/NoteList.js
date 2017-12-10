import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

import NoteItemDisplay from './NoteItemDisplay.js';
import NoteItemUpdate from './NoteItemUpdate.js';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        initiate(this);
    }


    removeNote = (key) => {
        let localNotes = {...this.state.notes};
        delete localNotes[key];

        updateState({notes: {...localNotes}});
    }

    updateContents = (key, content) => {
        let obj = Object.assign({}, this.state.notes); 
        obj[key].content = content;

        updateState({notes: obj});
        this.toggleNoteEditStatus(key);
    }

    toggleNoteEditStatus = (key) => {
        let obj = Object.assign({}, this.state.notes); 
        let currentBool = obj[key].edit;

        // stupid
        obj[key].edit = !currentBool;
        updateState({notes: obj});

    }


    renderList = () => {
        if (this.state) {
            return Object.keys(this.state.notes).map(key => {
                let note = this.state.notes[key];
                
                return (!note.edit) ? 
                    <NoteItemDisplay 
                        key={key} content={note.content} 
                        editNote={() => this.toggleNoteEditStatus(key)} 
                        removeItem={() => this.removeNote(key)}
                    /> 
                : 
                    <NoteItemUpdate 
                        key={key} 
                        content={note.content}
                        updateContents={(content) => this.updateContents(key, content)}
                        cancelUpdate={() => this.toggleNoteEditStatus(key)}
                    />;

            });
        }
    }

    render() {

        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

module.exports = NoteList;