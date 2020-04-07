import React from 'react';

import './App.css';
/*import Greek from './Greek.js'
import Welcome from './Welcome.js'*/
import Message from './Message.js'
import { Component } from 'react';
/*import Hello from './Hello.js*/
import Counter from './Counter.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Greek name="Bruce" heroName="Batman">
                    <p>This is Children props</p>
                </Greek> 
                <Greek name="Clark" heroName="Superman">
                    <button>Action</button>
                </Greek>
                <Greek name="Diana" heroName="wonder women" />
                
                <Welcome name="Bruce" heroName="Batman">
                    <p>This is Children props</p>
                </Welcome>
                <Welcome name="Clark" heroName="Superman">
                    <button>Action</button>
                </Welcome> 
                <Welcome name="Diana" heroName="wonder women" /> */}
                {/* <Hello />*/}
                {/* <Message/> */}
                <Counter/>
            </div>
        );
    }
}

export default App;