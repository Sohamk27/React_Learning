import React from 'react'

const Greetprops = (props) => {
    console.log(props)
    return (
        <div>
            <h1> 
                Hello {props.name} and his super hero name is {props.heroname} 
            </h1>
            {props.children}
        </div>
    )
}

export default Greetprops