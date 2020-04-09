import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div> Welcome kinu</div>
        } else {
            return <div>Welcome Pratik</div>
        }
        /*return (
            <div>
                <div>Welcome kinu</div>
                <div>Welcome Pratik</div>
            </div>
        )*/
    } 

}

export default UserGreeting