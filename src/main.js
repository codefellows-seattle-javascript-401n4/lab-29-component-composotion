import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
// import {BrowserRouter, Route} from 'react-router-dom';
import uuid from 'uuid';

import Header from './components/header';
import CreateNoteComp from './components/create-note-comp';
import NoteList from './components/note-list-comp';
import Footer from './components/footer';



// let renderIf = (test, component) => test ? component : undefined;


class App extends React.Component {
    
    constructor(props) { 
        super(props)
        this.state = {
            notes: []
        }

        this.createNote = this.createNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    createNote(note) {
        note.id = uuid.v1()
        note.edited = false
        note.complete = false
        this.setState(state => ({
            notes: [...state.notes, note]
        }))
        console.log(this.state.notes);
    }

    updateNote(note) {
        let notes = this.state.notes.map(item => {
          return item.id === note.id ? note : item
        })
        this.setState({ notes })
      }

      deleteNote(id) {
          let notes = this.state.notes.filter(note => note.id !== id)
          this.setState({ notes })
      }
    
    render() {
        return (
            <div>
                <Header appTitle="React App" />
                
                <CreateNoteComp handler={this.createNote} />

                <NoteList notes={this.state.notes} 
                    updateNote={this.updateNote}
                    deleteNote={this.deleteNote}/>
                
                
                <Footer>
                    <p>&copy;2017 Big Cheese</p>
                </Footer>
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.getElementById('root'));