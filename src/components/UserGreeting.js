import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
    

    render() {

        // 1. Method Using if/else
        // // if(this.state.isLoggedIn){
        // //     return (
        // //         <div>
        // //             Welcome Soham
        // //         </div>
        // //     )
        // // } 
        // // else {
        // //     return (
        // //         <div>
        // //             Welcome Guest
        // //         </div>
        // //     )
        // // }

        // // 2. Method Using Element Variables
        // let Message
        // if(this.state.isLoggedIn){
        //     Message = <div>Welcome Soham</div>
        // } else {
        //     Message = <div>Welcome Guest</div>
        // }

        // return <div>{Message}</div>

        // // 3. Method Using Ternary Conditional Operator
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Soham</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // 4. Method Using Short Circuit Operator
        return this.state.isLoggedIn && <div>Welcome Soham</div>
    }
}

export default UserGreeting
