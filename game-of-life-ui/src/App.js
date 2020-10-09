import React from 'react';
import './App.css';
import CellState from './game-logic/CellState';
import Game from './game-logic/Game';

const { ALIVE, DEAD } = CellState;

const game = new Game([
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
]);

class App extends React.Component {
  
  state = {
    cells: game.state
  }

  handleClick = () => {
    const nextState = game.nextGeneration();
    game.state = nextState;
    this.setState({cells: nextState})
  }

  render() {
  return (
    <div className="App">
      <h1> Conway's Game Of Life </h1>
      <table>
        <tbody>
        {
          this.state.cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {
                row.map((cell, colIndex) => (
                  <td key={colIndex} 
                      className="cell" 
                      style={{background: cell.state === ALIVE ? 'white' : '#212121'}}>
                  </td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
      <button onClick={this.handleClick}>Click Me</button>
    </div>
  );
  }
}

export default App;
