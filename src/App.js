import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greek from './Greek.js'
import Welcome from './Welcome.js'
import { Component } from 'react';
import Hello from './Hello.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Greek />
                <Welcome />
                <Hello />
            </div>
        );
    }
}

export default App;