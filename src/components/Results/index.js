import React from "react"

const Result = ({ userAnswers, score }) => {
  return (
    <div>
      {userAnswers.map(element => {
        {
          return (
            <div key={element.index}>
              <p>
                question # {element.index} is {element.status}
              </p>
            </div>
          )
        }
      })}
      <h3>your score is: {score}</h3>
    </div>
  )
}
export default Result
