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

        let squares = new Array(8);
        for(var i=0; i<8; i++) {
            squares[i] = new Array(8);
            for(var j=0; j<8; j++) {
                squares[i][j] = null;
            }
        }

	    this.state = {
	        squares: squares
	    };
    }

    handleClick(i, j) {
        let squares = this.state.squares.slice();
        squares[i][j] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i, j) {
        return(<Square value={this.state.squares[i][j]} key={j} onClick={() => this.handleClick(i, j)} />);
    }

    render() {
        let squares = this.state.squares.slice();
        return(
            <div className="Board">
                {
                    squares.map((nested, i) => {
                        
                         return(
                             <div className="board-row" key={"row" + i}>{
                                nested.map((element, j) => {
                                    return this.renderSquare(i, j);
                                })
                            } 
                            </div>
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
          Click on any square to place a Queen there.
        </p>
        <Board />
      </div>
    );
  }
}

export default App;
