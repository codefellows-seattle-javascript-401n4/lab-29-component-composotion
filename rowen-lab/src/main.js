'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Form from './component/note/form.js';
import List from './component/note/list.js';


const main = document.getElementById('root');

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: []};
    this.updateNote = this.updateNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  updateNote(id, newContent) {

    this.state.notes.forEach((note,i) => {
      if (note.id == id) this.state.notes[i].content = newContent;
    });
    this.setState(this.state);
  }

  editNote(id) {

    this.state.notes.forEach((note,i) => {
      if (note.id == id) this.state.notes[i].editing = !this.state.notes[i].editing;
    });
      this.setState(this.state);
    }

    addNote(note) {
      this.setState({
        notes: [...this.state.notes, note]
      });
    }

    deleteNote(_id) {
      this.setState( {
        notes: [...this.state.notes].filter(note => note.id !== _id)
      });
    }

  render() {
    return (
      <div>
        <h1>'Notes: '</h1>
        <Form addNote={this.addNote} />

        <List
        notes={this.state.notes}
        edit={this.editNote}
        newContent={this.updateNote}
        deleteContent={this.deleteNote}/>

      </div>
    )
  }
}

ReactDOM.render(<Apps/>, main);
