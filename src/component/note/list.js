import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note';
import UpdateForm from './update-form';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.renderNotes = this.renderNotes.bind(this);
  }

renderNotes()  {
  console.log('this.props.notes, line 12 list.js', this.props.notes);
  return this.props.notes.map(note => {
    return (note.editing)
    ?
    <UpdateForm
    key={note.id}
    note={note}
    newContent={this.props.newContent}
    edit={this.props.edit}/>
    :
    <Note
    key={note.id}
    note={note}
    edit={this.props.edit}
    deleteContent={this.props.deleteContent}/>;
  });
}

  render() {
    return (
      <div>
        <h2>Rendered Notes: </h2>
          <ul>{this.renderNotes()}</ul>
        </div>
    )
  }
}

module.exports = List;
