import React from "react";
import Board from "./Board.js";
import BoardBox from "./BoardBox.jsx";
import "./RowBoard.css"

// const RowBoard = (props) => {
//   console.log(props.RowId)
//   // const boardArray = [<BoardBox />, <BoardBox />, <BoardBox />]
//   return (
//     <div className="board-row">
//       {/* {boardArray} */}
//       {props.RowValue.map((ele,ind) => {
//         return <BoardBox rowId={props.RowId} colId={ind} boxValue={ele}/>
//       })}
//       {/* {this.props.boardBox} */}
//     </div>
//   )
// }
class RowBoard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="board-row">
        {this.props.rowValue.map((ele, ind) => {
          return <BoardBox
            clickfn={this.props.clickfn}
            rowId={this.props.rowId}
            colId={ind}
            boxValue={ele} />
        })}

      </div>
    )
  }
}


export default RowBoard