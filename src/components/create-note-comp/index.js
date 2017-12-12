'use strict';

import React from 'react';

class CreateNoteComp extends React.Component {
  constructor(props) {
    super(props) 
    this.state = this.props.note || {
      content: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handler(Object.assign({}, this.state))
  }

  handleChange(e) {
    let content = e.target.value;
    this.setState({content});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
       
       <input 
        type='text' 
        name='content'
        placeholder='Make a Note'
        value={this.state.content}
        onChange={this.handleChange}
        />
        
        <button type='submit'> Add Note </ button>
      </form>
    )
  }
}

export default CreateNoteComp