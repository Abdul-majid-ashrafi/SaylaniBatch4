import React, { Component } from 'react';
import './App.css';
import { Form } from './components/temp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.Inc = this.Inc.bind(this)
    this.dec = this.dec.bind(this)
    this.add = this.add.bind(this)

  }


  Inc() {   // its a fnction
    this.setState({
      counter: this.state.counter + 1
    })
  }
  dec() {   // its a fnction
    this.setState({
      counter: this.state.counter - 1
    })
  }


  add(e) {   // its a fnction
    e.preventDefault()
    let inputVariable = parseInt(this.refs.geInputValue.value)
    this.setState({
      counter: this.state.counter + inputVariable
    })
  }





  render() {
    return (
      <div className="App">

        <form onSubmit={this.add}>
          <input type="text" ref="geInputValue" />
          <button>add</button>
        </form>

        <button onClick={this.Inc}>Inc +</button>
        <button onClick={this.dec}>Dec -</button>
        <Form count={this.state.counter} data="Majid" />

      </div>
    );
  }
}

export default App;

        /*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/