import React from 'react';

// function Greet() {
//     return <h1>Hello Soham</h1>
// }

// better way to write functions using arrow functions in ES6

const Greet = () => <h1>Functional Component</h1> 
// export const Greet = () => <h1>Hello Soham</h1> // named export , will be imported with the name Greet with only

export default Greet; // default export you can import it with anyname when importing