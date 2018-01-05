'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import CreateForm from './components/CreateForm';
import NoteList from './components/NoteList';


const main = document.getElementById('root');

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: []};
  }

updateNote = (id, newContent) => {
  let stateCopy = this.state;

  stateCopy.notes.forEach((note,i) => {
    if (note.id == id) stateCopy.notes[i].content = newContent;
  });
  this.setState(stateCopy);
}

editNote = (id) => {
  let stateCopy = this.state;

  stateCopy.notes.forEach((note,i) => {
    if (note.id == id) stateCopy.notes[i].editing = !stateCopy.notes[i].editing;
});
    this.setState(stateCopy);
}

addNote = (note) => {
  this.setState({
    notes: [...this.state.notes, {...note}]
  });
}

deleteNote = (_id) => {
  this.setState( {
    notes: [...this.state.notes].filter(note => note.id !== _id)
  });
}
  render() {
    return (
      <div>
        <h1>'React is still confusing'</h1>
        <CreateForm addNote={this.addNote} />
        <NoteList notes={this.state.notes} edit={this.editNote} newContent={this.updateNote} deleteContent={this.deleteNote}/>
      </div>
    )
  }
}

ReactDOM.render(<Apps/>, main);
