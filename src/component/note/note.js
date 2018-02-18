import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component {
  constructor(props) {
    super(props);
  this.editNote = this.editNote.bind(this);
  this.noEdit = this.noEdit.bind(this);

  }
  editNote() {
  this.props.edit(this.props.note.id);

  }

  noEdit() {
  this.props.deleteContent(this.props.note.id);

  }

  render() {
    return (
      <div>
      <p>{this.props.note.content}</p>
      <button onClick={this.editNote}>Edit</button>
      <button onClick={this.noEdit}>Delete</button>
      </div>
    )
  }
}

module.exports = Note;
