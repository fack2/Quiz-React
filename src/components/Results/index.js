import React from "react"
import "./result.css"

const Result = ({ userAnswers, score }) => {
  return (
    <div className="results">
      {userAnswers.map(element => {
        {
          return (
            <div key={element.index}>
              <div className="eachResult">
                Question # {element.index} is {element.status}
              </div>
            </div>
          )
        }
      })}
      <div className="scoreDiv">your score is: {score}</div>
    </div>
  )
}
export default Result
