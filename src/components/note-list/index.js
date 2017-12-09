import React from 'react';
import PropTypes from 'prop-types';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    const {
      noteList,
      deleteNote,
    } = this.props;

    const listItems = noteList.map(ele =>
      (
        <NoteItem key={ele.id} note={ele} deleteNote={deleteNote} />
      ));
    return (
      <ul>{listItems}</ul>
    );
  }
}

NoteList.propTypes = {
  noteList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteNote: PropTypes.func.isRequired,
};


export default NoteList;
