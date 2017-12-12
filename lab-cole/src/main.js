'use strict';

import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrwoserRouter, Route} from 'react-router-dom'; //may change this name...

import Header from './components/header'
import Footer from './components/footer'
import NoteCreateForm from './components/note-create-form'
import NoteList from './components/note-list'
import NoteItem from './components/note-item'

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //anything here?
    }

    this.addNotes = this.addNotes.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.deleteNotes = this.deleteNotes.bind(this);
  }

  componentDidMount() {
    console.log("__STATE__", this.state);
  }

  addNote() {
    const notes = new Notes
  }

  app() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
      showErrors: true
    }
  }

  render() {
    return (
      <div>
        <Header title="Notes" />
        <main>
    )
  }
}