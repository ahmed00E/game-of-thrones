// import { Button } from 'bootstrap'
import React, { Component } from 'react'
import Character  from "./component/Character"

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
    
  }

  componentDidMount() {
   
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(result => this.setState({characters:result}))
    

  }
   


 render() {
    return (
      <div>
        <Character/>
      <h>Game of thrones</h>
     <button onClick={this.componentDidMount}></button>
     {this.state.characters.map(character => <Character/> 
     
)} 

     
      </div>
    )
  }
}

export default App
