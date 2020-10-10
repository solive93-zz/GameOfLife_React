import React from 'react';
import './App.css';
import Cell from './game-logic/Cell';
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
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
]);

class App extends React.Component {
  
  state = {
    cells: game.state,
    running: false,
    interval: null,
    maxSpeed: 50,
    minSpeed: 1000,
    step: 50,
    speed: undefined,
    count: 0
  }

  runSimulation = () => {
    this.setRunning();
    if(!this.state.running) {
      const timer = setInterval(this.updateGameState, this.state.speed === undefined ? 200 : this.state.speed)
      this.setState({interval: timer})
    }
    clearInterval(this.state.interval)
  }

  updateGameState = () => {
    const nextState = game.nextGeneration();
      game.state = nextState;
      this.setState({cells: nextState});
      this.updateCount();  

  }
  
  updateCount = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1
      return {count: newCount}
    })
  }

  setRunning = () => {
    this.state.running ? this.setState({running: false}) : this.setState({running: true})
  }

  switchCellState = (rowIndex, colIndex) => {
    this.setState((prevState) => {
      const cells = prevState.cells.map((row, rowNumber) => (
        row.map((cell, colNumber) => {
          if(rowNumber === rowIndex && colNumber === colIndex) {
            return new Cell(cell.state === ALIVE ? DEAD : ALIVE);
          }
          return cell;
        })
      ));
      game.state = cells;
      return {
        cells
      }
    });
  }

  speedChange = (event) => {
    
  }

  reSeed = () => {

  }  

  clear = () => {

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
                      onClick={() => this.switchCellState(rowIndex, colIndex)}
                      style={{background: cell.state === ALIVE ? 'white' : '#212121'}}>
                  </td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={() => this.runSimulation() }> {this.state.running ? "Stop" : "Play!"} </button>
        <button onClick={() => this.clear() }> Clear </button>
        <button onClick={() => this.reSeed() }> Re-Seed </button>
      </div>

      <div className="">
      <p>Generations: {this.state.count}</p>
        <label htmlFor="speed">Fast - Slow</label>
        <input type="range" id="speed" value={this.state.speed}
              min="50" max="1000" step="50" onChange={this.speedChange}/>
      </div>

    </div>
  );
  }
}

export default App;
