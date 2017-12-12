import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

import NoteCreateForm from '../src/components/NoteCreateForm';
import NoteItemDisplay from '../src/components/NoteItemDisplay';
import NoteItemUpdate from '../src/components/NoteItemUpdate';

Enzyme.configure({ adapter: new Adapter() });

// NoteCreateform
//  onChange + onSubmit
test('Test typing note contents, submitting the note, and it saving it to state', () => {
    
  
  
      const component = shallow(<NoteCreateForm/>); 
      component.find('#textInput').simulate('change', {
          target: {value: 'test note content'}
      });
  
      component.find('form').simulate('submit', {
          preventDefault: () => {}
      });
  
      Object.keys(component.state('notes')).map(key => {
          expect(component.state('notes')[key].content).toEqual('test note content');
      });
  });

  // NoteItem
  // Remove a note

  test('Test removing a note from the app state', () => {
    let deleteNote = sinon.spy();

    const note = shallow(<NoteItemDisplay content={"testNoteContent"} removeItem={deleteNote}/>);
    
    note.find('#deleteNote').simulate('click');

    expect(deleteNote.calledOnce).toEqual(true);
});

// NoteUpdateForm
// Ability to update a note

test('Test the ability to update a note', () => {
    let updatedContent = '';
    let originalContent = 'this is the original note contents';

    // I pass this function into NoteItemUpdate and it sends back the user's new content input
    let updatedNote = (newNoteContent) => {

        // store in local variable for comparing with old content
        updatedContent = newNoteContent;
    }

    const note = shallow(
        <NoteItemUpdate 
            content={originalContent}
            updateContents={updatedNote}
        />
    );

    note.find('#inputCapture').simulate('change', {
        target: {value: "This is the changed note contents."}
    });

    note.find('#clickUpdate').simulate('click', {
        preventDefault: () => {}
    });

    expect(updatedContent).toEqual("This is the changed note contents.");
    expect(updatedContent).not.toBe(originalContent);

});
