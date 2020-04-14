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
import ParentComponent from './ParentComponent.js'
import UserGreeting from './UserGreeting'
import NameList from './NameList'
import Stylesheet from './Stylesheet.js' 
import Inline from './Inline'
import './appStyles.css'
import styles from './appStyles.module.css'*/
import Form from './Form.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Form/>
                {/* 
                <h1 className='error'>Error</h1>
                <h1 className={styles.success}>Success</h1>
                <Inline />
               
                <Stylesheet primary="true" />
                <NameList/>
                <UserGreeting />
                <ParentComponent />
                <EventBind />
                <FunctionClick />
                <ClassClick />
                <Greek name="Bruce" heroName="Batman">
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