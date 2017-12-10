import React from 'react';
import ReactDom from 'react-dom'

// css
import './style/main.scss';

// componentsi

// components
import NoteCreateForm from './components/NoteCreateForm';
import NoteList from './components/NoteList';

class App extends React.Component {
    
    constructor(props) { 
        super(props);
    }
    
    render() {
        return (
            <div>
                <NoteCreateForm />
                <NoteList />
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.getElementById('root'));