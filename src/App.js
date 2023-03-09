import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet' // named export
import MyFunctionalComponent from './components/Greet' // default export
import MyClassComponent from './components/Welcome'
import HtmlComponent from './components/Hello'
import Greetprops from './components/Greetprops'
import Message from './components/Message'
import Counter from './components/counter'
import FunctionClick from './components/FunctioClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'


class App extends Component {
  render(){
    return (
      <div className="App">
        <ParentComponent/>
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Message/> */}
        {/* <MyFunctionalComponent/> */}
        {/* <MyClassComponent/> */}
        {/* <HtmlComponent/> */}
        {/* <Greetprops name='Bruce' heroname='Batman' > {/*destructuring props*/} 
          {/* <p>This is children props</p>
        </Greetprops> */}
        {/* <Greetprops name='Clarke' heroname='Superman' > */}
          {/* <button>Action</button> */}
        {/* </Greetprops> */}
        {/* <Greetprops name='Diana' heroname='Wonder Woman' /> */}
        {/* <Counter/> */}
      </div>
    );
  }
}

export default App;
