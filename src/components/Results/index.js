import React from "react"
import "./result.css"

const Result = ({ userAnswers, score }) => {
  return (
    <div className="results">
      {userAnswers.map(element => {
        {
          return (
            <div key={element.index}>
              {element.status == "true" ? (
                <div className="eachResult">
                  Question # {element.index} is {element.status}
                </div>
              ) : (
                <div className="eachResult falseResult">
                  Question # {element.index} is {element.status}
                </div>
              )}
            </div>
          )
        }
      })}
      <div className="scoreDiv">
        <br />
        score
        <br />
        {score}
      </div>
    </div>
  )
}
export default Result
