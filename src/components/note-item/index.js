import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../state/note';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.deleteNote(e.target.id);
  }

  render() {
    const {
      note,
    } = this.props;
    return (
      <li>
        <p>{note.content}</p>
        <button id={note.id} onClick={this.onClick}>Delete</button>
      </li>
    );
  }
}

NoteItem.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  note: PropTypes.instanceOf(Note).isRequired,
};

export default NoteItem;
