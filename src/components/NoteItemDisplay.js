import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

const NoteItemDisplay = ({content, removeItem, editNote}) => {

    return(
        <li>
            <div>{content}</div>
            <button onClick={editNote}>Update Me</button>
            <button onClick={removeItem}>Delete Me</button>
        </li>
    );
}
export default NoteItemDisplay;