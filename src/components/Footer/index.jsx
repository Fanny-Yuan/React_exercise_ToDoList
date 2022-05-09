import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos}=this.props
    //number of finished
    const doneCount=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    //total number
    const total=todos.length
    return (
      <div>
        <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total&&total!==0?true:false}/>
            </label>
            <span>
              <span>Finished: {doneCount}</span> / All: {total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">Delete finished tasks</button>
          </div>
      </div>
    )
  }
}
