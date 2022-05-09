import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  static propTypes={
    addTodo:propTypes.func.isRequired
  }

  handelKeyUp=(event)=>{
    const {keyCode,target}=event
    //judge whether it is enter
    if(event.keyCode !==13) return
    //todo cannot be null
    if(target.value.trim()===''){
      alert('Input cannot be null')
      return
    }
    //prepare an obj
    const todoObj={id:Math.random,name:target.value,done:false}
    this.props.addTodo(todoObj)
    //make input empty
    target.value=''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handelKeyUp} type="text" placeholder="Please input your task and press enter to confirm"/>
      </div>
    )
  }
}