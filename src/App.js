import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {

    constructor() {
        super();
	    this.state = {
	        value: null
	    };
    }
	
    render() {
        return(
            <button className="square" onClick={() => this.setState({value: 'X'}) }>{this.state.value}</button>
        );
    };
}

class Board extends Component {

    renderSquare(i) {
        return(<Square value={i} />);
    }
    render() {
        return(
            <div className="Board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
