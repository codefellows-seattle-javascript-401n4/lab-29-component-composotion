import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/home-page';
import NoteList from './components/note-list';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state =  {
      notes: [],
    }
    this.getApp = this.getApp.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  deleteNote(id){
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({notes: notes});
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render(){
    return (
      <div className="app">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <BrowserRouter>
          <section>
            <Route exact path="/" component={() => <HomePage app={this.getApp()} />} />
            <NoteList
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              app={this.getApp()}
            />
          </section>
        </BrowserRouter>
      </main>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
