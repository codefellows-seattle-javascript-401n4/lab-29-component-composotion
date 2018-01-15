import './_note-list.scss';

import React from 'react';
import NoteEdit from '../note-edit';

class NoteList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <ul className="note-list">
          {this.props.notes.map((item, i) => {
            return (
              <NoteEdit
                key={i} 
                note={item}
                deleteNote={this.props.deleteNote}
                app={this.props.app}
                notes={this.props.app.state.notes}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
export default NoteList;
