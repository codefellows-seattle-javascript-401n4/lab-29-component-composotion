import React from 'react';
import ReactDom from 'react-dom';
import { find, reject } from 'lodash';

import './styles/main.scss';

import Header from './components/header';
import NoteCreateForm from './components/note-create-form';

import NoteList from './components/note-list';
import Note from './state/note';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.state = {
      notes: [],
    };
  }

  addNote(opts, collection) {
    const note = new Note(opts);
    const currentCollection = this.state[collection];
    const newNotes = [...currentCollection, note];
    this.setState({ [collection]: newNotes });
  }

  updateNote(id, newOpts) {
    const {
      notes,
    } = this.state;
    const oldNote = find(notes, { id });
    const newNote = new Note(Object.assign(oldNote, newOpts));
    const filteredNotes = reject(notes, { id });
    const newNotes = [...filteredNotes, newNote];
    this.setState({ notes: newNotes });
  }

  deleteNote(id) {
    const {
      notes,
    } = this.state;
    const newNotes = reject(notes, { id });
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <NoteCreateForm addNote={this.addNote} />
          <NoteList
            noteList={this.state.notes}
            deleteNote={this.deleteNote}
            updateNote={this.updateNote}
          />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
