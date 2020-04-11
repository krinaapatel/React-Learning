import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        // short circuit operator
        return this.state.isLoggedIn && <div>Welcome krina</div>

        /* ternary operator condition
         return this.state.isLoggedIn ? (
            <div> Welcome Krina </div>   
        ) : (
             <div>Welcome Guest</div>
        )*/

        /* element variable
        let message
        if (this.state.isLoggedIn) {
            message = <div> Welcome kinu</div>
        } else {
            message = <div> Welcome Pratik</div >
        }

        return <div> {message} </div>
        */

        /*if (this.state.isLoggedIn) {
            return <div> Welcome kinu</div>
        } else {
            return <div>Welcome Pratik</div>
        }*/
        /*return (
            <div>
                <div>Welcome kinu</div>
                <div>Welcome Pratik</div>
            </div>
        )*/
    } 
}

export default UserGreeting