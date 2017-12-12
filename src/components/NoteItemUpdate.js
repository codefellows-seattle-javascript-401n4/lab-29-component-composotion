import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

const NoteItemUpdate= ({content, updateContents, cancelUpdate}) => {
    let updateContent = '';

    let noteContents = '';

     const captureNoteInput = (event) => {
        noteContents = event.target.value;
    }
    const sendContentUp = () => {

        updateContents(noteContents);
    }

    return(
        <li>
            <p>You have entered edit mode. Please enter new note content, or cancel.</p>
            <input id="inputCapture" type="text" onChange={captureNoteInput}></input>
            <button id="clickUpdate" onClick={sendContentUp}>Update Note</button>
            <button onClick={cancelUpdate}>Cancel Update</button>
        </li>
    );
}
export default NoteItemUpdate;