import React from 'react';

import './App.css';
import { Component } from 'react';
import EventBind from './EventBind';
/*import Greek from './Greek.js'
import Welcome from './Welcome.js'
import Message from './Message.js'*/
/*import Hello from './Hello.js
import Counter from './Counter.js'
import FunctionClick from './FunctionClick.js'
import ClassClick from './ClassClick.js'
import ParentComponent from './ParentComponent.js'*/
import UserGreeting from './UserGreeting';
import NameList from './NameList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NameList/>
                {/*<UserGreeting />
                <ParentComponent />
                <EventBind />
                <FunctionClick />
                <ClassClick />*/}
                {/* <Greek name="Bruce" heroName="Batman">
                    <p>This is Children props</p>
                </Greek> 
                <Greek name="Clark" heroName="Superman">
                    <button>Action</button>
                </Greek>
                 
                <Greek name="Diana" heroName="wonder women" />

                
                <Welcome name="Bruce" heroName="Batman"/>*/}
                    {/*     <p>This is Children props</p>
                </Welcome>
                <Welcome name="Clark" heroName="Superman">
                    <button>Action</button>
                </Welcome> 
                <Welcome name="Diana" heroName="wonder women" /> */}
                {/* <Hello />*/}
                {/* <Message/> */}
                {/*<Counter/>*/}
            </div>
        );
    }
}

export default App;