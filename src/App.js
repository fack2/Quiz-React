import React, { Component } from "react"
import Questions from "./components/Questions"
import Start from "./components/Start"
import "./App.css"

class App extends Component {
  state = {
    start: false
  }

  startGame = flag => {
    this.setState({ start: flag })
  }

  render() {
    return (
      <div className="App">
        {this.state.start ? <Questions /> : <Start start={this.startGame} />}
      </div>
    )
  }
}

export default App
