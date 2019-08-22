import React, { Component } from "react"
import data from "../../data"
import Result from "../Results"
import "./question.css"

class Questions extends Component {
  state = {
    index: 0,
    currentQuestion: data[0],
    end: false,
    userAnswers: [],
    selected: "",
    score: 0
  }

  addUserAnswers = result => {
    const { index, userAnswers } = this.state
    this.setState({
      userAnswers: userAnswers.concat({ index, status: result })
    })
  }

  moveToNextQuestion = (index, end) => {
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

  nextQuestion = ({ target }) => {
    const { value } = target
    const { index, end, currentQuestion, score } = this.state
    const { answer } = currentQuestion

    this.setState({ selected: value })

    if (value === answer) {
      this.setState({ score: score + 1 })
      this.addUserAnswers("true")
    } else {
      this.addUserAnswers("false")
    }

    this.moveToNextQuestion(index, end)
  }

  render() {
    const { currentQuestion, end, selected, userAnswers, score } = this.state
    const { question, options } = currentQuestion

    return (
      <div className="largerOne">
        {!end ? (
          <div>
            <div className="question-div">{question}</div>
            {options.map((option, i) => {
              return (
                <div key={i}>
                  <label htmlFor="selected"> </label>
                  <input
                    id="selected"
                    type="radio"
                    onChange={this.nextQuestion}
                    value={option}
                    checked={option === selected}
                    key={i}
                  />
                  {option}
                </div>
              )
            })}
          </div>
        ) : (
          <Result userAnswers={userAnswers} score={score} />
        )}
      </div>
    )
  }
}
export default Questions
