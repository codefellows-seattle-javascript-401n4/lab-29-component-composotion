'use strict';

import React from 'react';

import CreateNoteComp from '../create-note-comp';
import NoteItem from '../note-item-comp';

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <ul>
          {this.props.notes.map((note, i) => {
            return(
            <li key={i}>
            <NoteItem
              key={i}
              note={note}
              deleteNote={this.props.deleteNote}
              updateNote={this.props.updateNote}
              />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default NoteList;

