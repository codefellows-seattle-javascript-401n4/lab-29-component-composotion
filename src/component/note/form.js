import React from 'react';
import ReactDOM from 'react-dom';

import uuid from 'uuid/v1';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.submitNote = this.submitNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

submitNote(e) {
  e.preventDefault();

  let newNote = {
    id: uuid(),
    content: this.state.content,
    editing: false,
    completed: false
  };
  this.props.addNote(newNote);
  console.log('new note:', newNote);
}

handleChange(e) {
  this.setState({
    [e.target.id]: e.target.value
  });
  console.log(this.state)
}
  render() {
    return (
      <div>
        <h2>You may enter notes below</h2>
        <form>
          <input id='content' type="text" onChange={this.handleChange} />
          <button onClick={this.submitNote}>Submit</button>
        </form>
      </div>
    )
  }
}

module.exports = Form;
