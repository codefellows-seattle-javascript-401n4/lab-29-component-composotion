import React from 'react';
import PropTypes from 'prop-types';

import NoteForm from '../note-form';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [{
      key: 'submit-note',
      type: 'submit',
      value: 'Submit',
    }];
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  setFormState(newState) {
    this.setState(newState);
  }

  onSubmit() {
    this.props.addNote(this.state);
  }

  render() {
    return (
      <NoteForm onSubmit={this.onSubmit} setFormState={this.setFormState} inputs={this.inputs} />

    );
  }
}

NoteCreateForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteCreateForm;
