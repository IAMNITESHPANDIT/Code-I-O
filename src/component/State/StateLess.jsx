import React, { Component } from 'react'

export default class StateLess extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: this.props.name
    }
  }
 
clickMe = () => {
    //console.log(this.props)
    
  }

  
  render() {
    return (
      <div>{this.state.name}
      <button onClick={this.props.eventHappend}>Click here</button>
      </div>
    )
  }
}
