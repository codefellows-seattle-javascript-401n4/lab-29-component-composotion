import './_note-edit.scss';

import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.editTrue = this.editTrue.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  handleDelete(){
    this.props.deleteNote(this.props.note.id)
  }

  editTrue(){
    this.setState({editing: true})
  }

  editNote(note, id){
    note.id = id;
    let notes = this.props.notes;
    notes = notes.map(prevNote => {
      return id === prevNote.id ? note : prevNote
    });
    this.props.app.setState({notes: notes});
    this.setState({editing: false});
  }

  render(){
    return(
      <div className='note-edit'>
        <li onDoubleClick={this.editTrue}>
          {this.state.editing == true ?
            <section className='edit'>
              <NoteCreateForm
                noteToUpdate={this.props.note}
                buttonType='Editing'
                handleSubmit={this.editNote}
              />
            </section>
            :
            <section>
              <section>
                <h2>{this.props.note.title}</h2>
              </section>
              <span>
                <section>
                  <p>{this.props.note.content}</p>
                </section>
              </span>
              <button className='button' onClick={this.handleDelete}>Delete</button>
            </section>
          }
        </li>
      </div>
    )
  }
}
export default NoteEdit;
