
import './_home-page.scss';

import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
  }

  createNote(note){
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note]
    }))
  }

  render(){
    return (
      <div className="home-page">
        <h2>Home Page!</h2>

        <NoteCreateForm
          handleCreateNote={this.createNote}
          buttonType='Create'
        />

      </div>
    )
  }
}
export default HomePage;
