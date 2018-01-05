import React from 'react';
import ReactDOM from 'react-dom';
import NoteItem from './NoteItem';
import NoteUpdateForm from './NoteUpdateForm';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

renderNotes = () => {
  return this.props.notes.map(note => {
    return (note.editing) ?
    <NoteUpdateForm key={note.id} note={note} newContent={this.props.newContent} edit={this.props.edit}/> :
    <NoteItem key={note.id} note={note} edit={this.props.edit} deleteContent={this.props.deleteContent}/>;
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
