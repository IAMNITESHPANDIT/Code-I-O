import React, { Component } from 'react'
import StateLess from './StateLess';

export default class StateFullComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      name: 'nitesh'
    }
  }
  changeName(){
    this.setState({name:''})
   // <h2>{this.state.name}</h2>
  }
  render() {
    return (
      <StateLess name={this.state.name} eventHappend={this.changeName}>
        <button onClick={this.changeName}>Change it</button>
      </StateLess>
    )
  }
}
