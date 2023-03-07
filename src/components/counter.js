import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            count: 0
      }
    }
    
    increase() {
        // // if we use this.state.count = this.state.count + 1, it will not render in the UI
        // // this.state.count = this.state.count + 1
        // // console.log(this.state.count)
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => { 
        //         console.log('thi is callback ' + this.state.count)
        //     }
        // )

        // we pass a function instead whose parameter is the previous state - prevState
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)  
    }

    increase5() {
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }
    
    render() {
        return (
        <div>
            <h1>Count - {this.state.count}</h1> 
            <button onClick={ () => this.increase5()}>Increment</button>
        </div>
        )
    }
}

export default counter
