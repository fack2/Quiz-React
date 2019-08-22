import React from "react"
import "./start.css"

const Start = ({ start }) => {
  return (
    <main className="mainStart">
      <div className="mainPoition">
        <h1>WELCOME</h1>
        <p>Test Your Knowledge</p>
        <button
          className="startButton"
          onClick={() => start(true)}
          type="submit"
        >
          Start
        </button>
      </div>
    </main>
  )
}
export default Start
