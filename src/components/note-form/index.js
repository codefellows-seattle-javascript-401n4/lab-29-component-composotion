import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../state/note';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.props.setFormState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const {
      inputs,
      textAreaId,
      note,
    } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="note">Note content
          <textarea
            rows="10"
            cols="50"
            id={textAreaId}
            onChange={this.onChange}
            defaultValue={note.content}
          />

        </label>
        {inputs.map(ele =>
          <input key={ele.key} type={ele.type} value={ele.value} onClick={ele.handler} />)}
      </form>
    );
  }
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  textAreaId: PropTypes.string,
  note: PropTypes.PropTypes.instanceOf(Note),
};

NoteForm.defaultProps = {
  textAreaId: 'content',
  note: { content: '' },
};

export default NoteForm;
