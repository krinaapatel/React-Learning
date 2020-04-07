import React, { Component } from 'react'


class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }
    ChangeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        /* return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>*/
        return (
            <div>
                < h1 > {this.state.message}</h1 >
                <button onClick={() => this.ChangeMessage()} > Subscribe</button>
            </div>
        )
    }
}

export default Message;