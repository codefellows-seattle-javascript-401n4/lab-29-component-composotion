import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
tryEdit = () => {
  this.props.edit(this.props.note.id);
}

deleteEdit = () => {
  this.props.deleteContent(this.props.note.id);
}
  render() {
    return (
      <div>
      <p>{this.props.note.content}</p>
      <button onClick={this.tryEdit}>Edit</button>
      <button onClick={this.deleteEdit}>Delete</button>
      </div>
    )
  }
}

module.exports = NoteItem;
