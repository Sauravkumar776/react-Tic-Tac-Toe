import React from "react";
import "./BoardBox.css"

class BoardBox extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
   
    return (
    <div 
    onClick={() => this.props.clickfn(this.props.rowId,this.props.colId)} className="board-box"> 
  
      {this.props.boxValue}
    </div>
    )
  }
}
export default BoardBox