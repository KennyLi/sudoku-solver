import React, { useState } 	from 'react';
import './App.css';

function App() {

  const initializeNeighborDict = () => {
    let dict = {};
    let cliques=[[0,1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16,17],
    [18,19,20,21,22,23,24,25,26],
    [27,28,29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42,43,44],
    [45,46,47,48,49,50,51,52,53],
    [54,55,56,57,58,59,60,61,62],
    [63,64,65,66,67,68,69,70,71],
    [72,73,74,75,76,77,78,79,80],
    [0,9,18,27,36,45,54,63,72],
    [1,10,19,28,37,46,55,64,73],
    [2,11,20,29,38,47,56,65,74],
    [3,12,21,30,39,48,57,66,75],
    [4,13,22,31,40,49,58,67,76],
    [5,14,23,32,41,50,59,68,77],
    [6,15,24,33,42,51,60,69,78],
    [7,16,25,34,43,52,61,70,79],
    [8,17,26,35,44,53,62,71,80],
    [0,1,2,9,10,11,18,19,20],
    [3,4,5,12,13,14,21,22,23],
    [6,7,8,15,16,17,24,25,26],
    [27,28,29,36,37,38,45,46,47],
    [30,31,32,39,40,41,48,49,50],
    [33,34,35,42,43,44,51,52,53],
    [54,55,56,63,64,65,72,73,74],
    [57,58,59,66,67,68,75,76,77],
    [60,61,62,69,70,71,78,79,80]];
    for (let i = 0; i < 81; i++) {
        let temp = [];
        for(const clique of cliques) {
            if(clique.includes(i)) {
                temp.push(...clique);
            }
        }
        dict[i] = [...new Set(temp)];
    }
    return dict;
  }

  const initializeBoard = () => {
    let board = [];
    for(let r = 0; r < 9; r++) {
        let temp = [];
        for(let c = 0; c < 9; c++) {
            temp.push(0);
        }
        board.push(temp);
    }
    return board;
  }

  const initializePossibleDict = () => {
    let dict = {};
    let possible = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < 81; i++) {
        dict[i] = possible;
    }
    return dict;
  }

  const neighborDict = initializeNeighborDict();
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [board , setBoard] = useState(initializeBoard());
  const [possibleDict, setPossibleDict] = useState(initializePossibleDict());
  const [activeValue, setActiveValue] = useState(0);

  const buttonHandler = (e) => {
    setActiveValue(parseInt(e.target.value));
  }

  const gridHandler = (e) => {
    if(activeValue != 0) {
      let row = e.target.closest('tr').rowIndex;
      let col = e.target.cellIndex;
      let temp = Array.from(board);
      temp[row][col] = activeValue;
      setBoard(temp);
      console.log(board);
      e.target.innerHTML = activeValue;
    }
  }

  return (
    <div className="main-container">
      <header className="header">
        Sudoku Solver
      </header>
      <div className="grid-container">
        <table className='grid'>
          <tbody>
            {board.map((entries, row) => (
              <tr key={"row: " + row}>
                {entries.map((entry, col) => (
                  <td className="data" key={row * 9 + col} onClick={gridHandler}>{entry != 0 ? entry : null}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        {values.map((value) => (
          <button type="button" className="button" key={"button: " + value} onClick={buttonHandler} value={value}>{value}</button>
        ))}
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

    </div>
  );
}

export default App;
