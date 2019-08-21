import React from "react"
import "./start.css"

const Start = ({ start }) => {
  return (
    <main className="mainStart">
      <h1>WELCOME</h1>
      <p>This is our App for week-9 GSG</p>
      <button onClick={() => start(true)} type="submit">
        Start
      </button>
    </main>
  )
}
export default Start
