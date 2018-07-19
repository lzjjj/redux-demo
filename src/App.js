import React, { Component } from 'react';
import CounterGroup from "./Components/CounterGroup"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <CounterGroup propsObj={this.props} amount={3}/>
      </div>
    );
  }
}

export default App;