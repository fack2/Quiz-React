import React, { Component } from "react"
import Start from "./components/start/Start"
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
        {this.state.start ? (
          <p>hello Game</p>
        ) : (
          <Start start={this.startGame} />
        )}
      </div>
    )
  }
}

export default App
