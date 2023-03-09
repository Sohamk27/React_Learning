import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
                message: 'Hello'
        }

        // 3. approach to binding in using the Constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    // 4. approach to binding using arrow function in the class 
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
        <div>
            <div>{this.state.message}</div>
            {/* 1. approach to binding <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* 2. approach to binding using arrow function <button onClick={() => {this.clickHandler()}}>Click</button> */}
            {/* 3. approach to binding in using the Constructor <button onClick={this.clickHandler}>Click</button> */}
            {/* 4. approach to binding using arrow function in the class <button onClick={this.clickHandler}>Click</button> */}
        </div>
        )
    }
}

export default EventBind
