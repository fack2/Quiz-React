import React, { Component } from "react"
import data from "../../data"
import "./question.css"
class Questions extends Component {
  render() {
    const questionAndOption = data
    console.log("questionAndOption", questionAndOption)
    console.log("data", data)
    // const items = []

    // for (const [index, value] of questionAndOption.options.entries()) {
    //   items.push(<li key={index}>{value}</li>)
    // }

    return (
      <div className="largerOne">
        <div className="question-div">{questionAndOption.question}</div>
        {/* <p>{items}</p> */}
        <ul className="list">
          {questionAndOption.options.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    )
  }
}
export default Questions
