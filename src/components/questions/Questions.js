import React, { Component } from "react"
import data from "../../data"
import "./question.css"

class Questions extends Component {
  state = {
    index: 0,
    questionNumber: data[0],
    end: false
  }

  nextQuestion = () => {
    this.state.index !== 4
      ? this.setState(
          {
            index: this.state.index + 1
          },
          () => {
            this.setState({ questionNumber: data[this.state.index] })
          }
        )
      : this.setState({ end: !this.state.end })
  }

  render() {
    return (
      <div className="largerOne">
        {!this.state.end ? (
          <div>
            <div className="question-div">
              {this.state.questionNumber.question}
            </div>
            <ul className="list">
              {this.state.questionNumber.options.map((value, i) => {
                return (
                  <li onClick={this.nextQuestion} key={i}>
                    {value}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <p>should result</p>
        )}
      </div>
    )
  }
}
export default Questions
