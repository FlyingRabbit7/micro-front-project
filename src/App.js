import React from "react";
import ReactDOM from "react-dom";

import Test from './Test'
import Test2 from './test2';
import Test3 from './test3';

import { MyContext } from './context'

class App extends React.Component{

  state = {
    num: 0,
  };

  onAdd = () => {
    let _num = this.state.num;
    this.setState({
      num: _num+1
    })
    this.setState({
      num: _num+1
    })
    this.setState({
      num: _num+1
    })
  }

  componentDidUpdate() {
    // let _num = this.state.num;
    // this.setState({
    //   num: 2
    // })

    console.log('parent')
  }

  onAdd2 = () => {
    console.log('add2')
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  render() {
    return (
      <MyContext.Provider value={this.state.num}>
        <div onClick={this.onAdd2}>
          {/* <Test title="haha"></Test> */}
          <button onClick={this.onAdd}>add</button>
          <Test2></Test2>
          <Test3></Test3>
        </div>
      </MyContext.Provider>
    )
  }
}

export default App