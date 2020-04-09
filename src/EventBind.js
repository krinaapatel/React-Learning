import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    // binding in the constructor
    /*clickHandler() {
        this.setState({
            message: 'Good Bye!'
        })
        console.log(this)
    }*/
    // using class property as arrow function
    clickHandler = () => {
        this.setState({
            message: 'Gooood Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click me</button>*/}
                {/*<button onClick={() => this.clickHandler()}>Click me</button>*/}
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}
export default EventBind;