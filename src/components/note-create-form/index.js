import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import NoteForm from '../note-form';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [{
      key: 'submit-note',
      type: 'submit',
      value: 'Submit',
      handler: noop,
    }];
    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  onSubmit() {
    this.props.addNote(this.state, 'notes');
  }

  setFormState(newState) {
    this.setState(newState);
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
