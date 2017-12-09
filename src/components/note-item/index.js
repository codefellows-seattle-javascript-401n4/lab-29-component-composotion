import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../state/note';
import NoteEditForm from '../note-edit-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.renderEditingForm = this.renderEditingForm.bind(this);
  }

  onClick(e) {
    this.props.deleteNote(e.target.dataset.noteid);
  }

  startEditing(e) {
    e.stopPropagation();
    this.props.updateNote(e.target.dataset.noteid, { editing: true });
  }

  renderEditingForm(note) {
    console.log('renderEditingForm', note);
    if (note.editing === true) {
      return (
        <NoteEditForm note={note} updateNote={this.props.updateNote} />
      );
    }
    return (
      <li>
        <p data-noteid={note.id} onClick={this.startEditing}>{note.content}</p>
        <button data-noteid={note.id} onClick={this.onClick}>Delete</button>
      </li>
    );
  }

  render() {
    const {
      note,
    } = this.props;
    return (
      <div>
        {this.renderEditingForm(note)}
      </div>
    );
  }
}

NoteItem.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  note: PropTypes.instanceOf(Note).isRequired,
};

export default NoteItem;
