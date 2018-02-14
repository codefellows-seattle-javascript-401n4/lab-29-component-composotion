import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import NoteList from '../note-list'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1> ToDo!!! </h1>
              <nav>
                <ul>
                  <li> <Link to='/note-list'> Note List </Link> </li>
                  <li> <Link to='/note-list'> Create </Link> </li>
                  <li> <Link to='/note-list'> Change </Link> </li>
                  <li> <Link to='/note-list'> Delete </Link> </li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={() => <h1>  </h1>} />
            <Route exact path='/note-list' component={NoteList} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App