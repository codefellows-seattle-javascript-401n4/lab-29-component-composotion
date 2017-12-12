import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

import Note from '../../state/note';
import NoteForm from '../note-form';

class NoteEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [
      {
        key: 'cancel',
        type: 'button',
        value: 'Cancel',
        handler: this.cancel.bind(this),
      },
      {
        key: 'submit-note',
        type: 'submit',
        value: 'Submit',
        handler: noop,
      }];
    this.cancel = this.cancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }


  onSubmit() {
    const {
      note,
      updateNote,
    } = this.props;
    const updatedNote = Object.assign(this.state, { editing: false });
    updateNote(note.id, updatedNote);
  }

  setFormState(newState) {
    this.setState(newState);
  }

  cancel() {
    console.log(this.props);
    const {
      note,
      updateNote,
    } = this.props;
    const updatedNote = Object.assign(note, { editing: false });
    updateNote(note.id, updatedNote);
  }
  render() {
    const {
      note,
    } = this.props;
    return (
      <NoteForm
        onSubmit={this.onSubmit}
        setFormState={this.setFormState}
        inputs={this.inputs}
        note={note}
      />
    );
  }
}

NoteEditForm.propTypes = {
  note: PropTypes.instanceOf(Note).isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default NoteEditForm;
