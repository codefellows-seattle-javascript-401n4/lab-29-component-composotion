import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.handleUpdate(this.props.)//this.props.what?
  }

  handleCancel(e){
    this.props.handleCancel()
  }

  handleDelete(){
    this.props.handleDelete(this.props.)//this.props.what?
  }

  render() {
    return (
      <form className='note-update-form'>
        <button onClick={this.handleUpdate}> Update Note </button>
        <button onClick={this.handleCancel}> Cancel Note Update </button>
        <button onClick={this.handleDelete}> Delete Note </button>
      </form>
    )
  }
}

export default NoteUpdateForm;