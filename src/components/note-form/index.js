import React from 'react';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.props.setFormState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const {
      inputs,
      textAreaId,
    } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="note">Note content
          <textarea
            rows="10"
            cols="50"
            id={textAreaId}
            onChange={this.onChange}
          />
        </label>
        {inputs.map(ele =>
          <input key={ele.key} type={ele.type} value={ele.value} />)}
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  textAreaId: PropTypes.string,

};

NoteCreateForm.defaultProps = {
  textAreaId: 'content',
};

export default NoteCreateForm;
