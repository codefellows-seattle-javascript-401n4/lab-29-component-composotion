
import React from 'react';
import ReactDOM from 'react-dom';

import uuid from 'uuid/v1';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

submitNote = (e) => {
  e.preventDefault();
  let newNote = {
    id: uuid(),
    content: this.state.content,
    editing: false,
    completed: false
  }
  this.props.addNote(newNote);
  console.log('submitNote:', newNote);
}
//Capture input data, send to parent as a note.
captureChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
}
  render() {
    return (
      <div>
        <h1>'Please enter your note'</h1>
        <form>
          <input id='content' type="text" onChange={this.captureChange} />
          <button onClick={this.submitNote}>Click Me</button>
        </form>
      </div>
    )
  }
}

module.exports = CreateForm;

//Create a form and capture all content.
