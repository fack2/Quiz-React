import React, { Component } from "react"
import data from "../../data"
import "./question.css"

class Questions extends Component {
  state = {
    index: 0,
    currentQuestion: data[0],
    end: false
  }

  nextQuestion = () => {
    const { index, end } = this.state
    index !== data.length - 1
      ? this.setState(
          {
            index: index + 1
          },
          () => {
            const { index } = this.state
            this.setState({ currentQuestion: data[index] })
          }
        )
      : this.setState({ end: !end })
  }

  render() {
    const { currentQuestion, end } = this.state
    const { question, options } = currentQuestion
    return (
      <div className="largerOne">
        {!end ? (
          <div>
            <div className="question-div">{question}</div>
            <ul className="list">
              {options.map((value, i) => {
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
