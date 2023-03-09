import React from 'react'

// const Greetprops = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1> 
//                 Hello {props.name} and his super hero name is {props.heroname} 
//             </h1>
//             {props.children}
//         </div>
//     )
// }

// 1. Destructuring props

const Greetprops = ({name, heroname, children}) => {
    return (
        <div>
            <h1> 
                Hello {name} and his super hero name is {heroname} 
            </h1>
            {children}
        </div>
    )
}

// // 2. Destructuring in the function body

// const Greetprops = (props) => {
//     const {name, heroname, children} = props
//     return (
//         <div>
//             <h1> 
//                 Hello {name} and his super hero name is {heroname} 
//             </h1>
//             {children}
//         </div>
//     )
// }

export default Greetprops