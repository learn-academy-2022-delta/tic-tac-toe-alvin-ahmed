import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      xIsNext: true 
    }

  }

  handleGamePlay = (index) => {
    //alert(index)
    const {squares} = this.state
    
    squares[index] = this.state.xIsNext ? "❌" : "⭕️"
    //squares[index] = "❌"
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext 
    })
  }

   calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }






  render() {
    // const winner = calculateWinner(this.state.squares)
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + 
    //   (this.State.xIsNext ? "❌" : "⭕️")
    // }
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard'>
       {this.state.squares.map((value, index) => {
        return <Square 
          key={index}
          value={value}
          index={index}
          handleGamePlay={this.handleGamePlay}
        />
       })}
       </div>



        
      </>
    )
  }
}
export default App
