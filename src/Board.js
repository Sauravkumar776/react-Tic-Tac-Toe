import React from "react";
import "./style.css";
import BoardBox from "./BoardBox.jsx";
import RowBoard from "./RowBoard.jsx";

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardState:
        [["", "", ""],
        ["", "", ""],
        ["", "", ""]],

      activePlayer: "X",
      winner: ""
    }
    this.play = this.play.bind(this)

  }

  componentDidUpdate() {
    if (this.checkWinner()) {
      alert(this.state.activePlayer==="X"?"0":"X")
      this.setState({
        boardState:
          [["", "", ""],
          ["", "", ""],
          ["", "", ""]],

        activePlayer: "X",
        winner: "None"
      })
    }
  }

  play(RowId, ColId) {
    let currentState = this.state.boardState;
    currentState[RowId][ColId] = this.state.activePlayer;
    this.setState({
      boardState: currentState,
      activePlayer: this.state.activePlayer === "X" ? "0" : "X"
    })
  }


  checkWinner() {
    const board = this.state.boardState;
    let end = true;

    //row Check
    for (let i = 0; i < 3; i++) {
      end = true
      for (let j = 1; j < 3; j++) {
        if ((board[i][j] !== board[i][j - 1]) || board[i][j] === "") {
          end = false;
        }
      }
        if (end) {
          this.setState({
            winner: board[i][0]
          })
          return true;
        }
      
    }

    //Column check 
    for (let j = 0; j < 3; j++) {
      end = true
      for (let i = 1; i < 3; i++) {
        if ((board[i][j] !== board[i - 1][j]) || board[i][j] === "") {
          end = false;
        }
      }
        if (end) {
          this.setState({
            winner: board[0][j]
          })
          return true;
        }
      
    }

    //Diagonal Checks
    if ((board[0][0] === board[1][1]) && board[1][1] === board[2][2]) {
      if (board[0][0] != "") {
        this.setState({
          winner: board[0][0]
        })
        return true;
      }
    }

    if ((board[0][2] === board[1][1]) && board[1][1] === board[2][0]) {
      if (board[0][2] != "") {
        this.setState({
          winner: board[0][2]
        })
        return true;
      }
    }

    let draw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          draw = false
        }
      }
    }

    if (draw) {
      this.setState({
        winner: "DRAW"
      })
      return true;
    }

    return false;

  }

  render() {
    return (

      <div>
        <h1> Result </h1>
        <h1 className="main-head"> Tic Tac Toe </h1>
        <div id="board">
          {this.state.boardState.map((ele, index) => {
            return <RowBoard clickfn={this.play} rowId={index} rowValue={ele} />
          })}

        </div>

        <h2 className="player-turn"> Player Turn: </h2>

      </div>

    );
  }
}
