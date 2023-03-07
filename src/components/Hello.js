import React from 'react'

// // create a function that appears to be html but is in fact jsx

// const Hello = () => {
//     return  (
//         <div classNme='dummyClass'>
//             <h1>Hello Soham</h1>
//         </div>
//     )
// }

// without using JSX

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello',  className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Soham')
    )
}

export default Hello