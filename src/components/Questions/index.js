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

  nextQuestion = ({ target }) => {
    this.setState({ selected: target.value })

    const { index, end, userAnswers, currentQuestion, score } = this.state

    if (target.value === currentQuestion.answer) {
      this.setState({
        userAnswers: userAnswers.concat({
          index,
          status: "true"
        }),
        score: score + 1
      })
    } else {
      this.setState({
        userAnswers: userAnswers.concat({ index, status: "false" })
      })
    }

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
                  {" "}
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
