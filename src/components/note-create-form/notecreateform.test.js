import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import NoteCreateForm from './index';

// notes on using snapshot tests

/* component = renderer.create(<NoteCreateForm />)
let tree = component.toJSON()
expect(tree).toMatchSnapshot()
regenerates snapshots npm test -- -u
snapshot is sorta like a mock for backend
*/

configure({ adapter: new Adapter() });

describe('<NoteCreateForm>', () => {
  describe('onSubmit', () => {
    it('calls add note when the form is submitted', () => {
      const addNote = sinon.spy();
      const wrapper = shallow(<NoteCreateForm addNote={addNote} />);
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
      expect(addNote.calledOnce).toEqual(true);
    });
  });

  describe('onChange', () => {
    it('calls add note when the form is submitted', () => {
      const addNote = sinon.spy();
      const wrapper = shallow(<NoteCreateForm addNote={addNote} />);
      const targetId = 'id';
      const targetValue = 'content';
      wrapper.find('textarea').simulate('change', {
        target: {
          id: targetId,
          value: targetValue,
        },
      });
      expect(wrapper.state()).toEqual({ [targetId]: targetValue });
    });
  });
});
