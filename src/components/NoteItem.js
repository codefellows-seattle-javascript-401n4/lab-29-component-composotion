import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <li>{this.props.note.content}</li>
    )
  }
}

module.exports = NoteItem;
