import React from 'react';
import ReactDOM from 'react-dom';

class UpdateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleChange = this.handleChange.bind(this);
    this.newUpdate = this.newUpdate.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  newUpdate() {
    this.props.newContent(this.props.note.id, this.state.content);
    this.props.edit(this.props.note.id);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidUpdate() {
    console.log('This is the new state', this.state);
  }

  cancelUpdate() {
    this.props.edit(this.props.note.id);
  }

  render() {
    return (
      <div>
        <input id='content' type="text" placeholder={this.props.note.content} onChange={this.handleChange} />
        <button onClick={this.newUpdate}>Change Content</button>
        <button onClick={this.cancelUpdate}>Cancel</button>
      </div>
    )
  }
}

module.exports = UpdateNote;
