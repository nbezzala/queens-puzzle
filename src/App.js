import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
    return(
        <button className="square" onClick={() => props.onClick()}>{props.value}</button>
    );
}



class Board extends Component {


    constructor() {
        super();

        let squares = Array(8).fill(null);
        squares.map(function(s) {
            s = Array(8).fill(null);
        });

	    this.state = {
	        squares: squares
	    };
    }

    handleClick(i) {
        let squares = this.state.squares.slice();
        squares[i] = i;
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return(<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
    }

    render() {
        let squares = this.state.squares.slice();
        return(
            <div className="Board">
                {
                    squares.map(function(s) {
                         return(
                             <div className="board-row">X</div>
                        );
                    })
                }
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
