import React from 'react';
import ReactDOM from 'react-dom';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

renderNotes = () => {
  return this.props.notes.map(note => {
    return <NoteItem key={note.id} note={note} />;
  });
}

  render() {
    return (
      <div>
        <h2>'This is from the NoteList.js file'</h2>
          <ul>{this.renderNotes()}</ul>
        </div>
    )
  }
}

module.exports = NoteList;
