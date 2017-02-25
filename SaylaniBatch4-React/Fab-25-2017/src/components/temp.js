import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


export class Form extends Component {
    constructor() {
        super()
    }
    render() {
        console.log('Renbder ',this.props)
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        <h2>Counter : {this.props.count}</h2>


                </p>
            </div>
        );
    }
}

// export default App;

