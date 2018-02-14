import React from 'react'
import NoteCreateForm from '../note-create-form'
//import NoteChangeForm from '../note-change-form'
//import NoteDeleteForm from '../note-delete-form'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this)
    this.changeNote = this.changeNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  addNote(note) {
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  changeNote(e) {
    //not sure how to change a current note...
  }

  deleteNote(e) {
    //not sure how to delete a current note...
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='notelist'>
          <h1> NoteList </h1>
          <NoteCreateForm onComplete={this.addNote} />
      </div>
    )
  }
}

export default NoteList