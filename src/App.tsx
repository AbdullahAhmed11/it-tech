import React from "react"
import TopBar from "./components/TopBar"
import CourseDetails from "./components/CourseDetails"
function App() {

  return (
    <div className="flex flex-col">
      <TopBar/>
      <CourseDetails/>
    </div>
  )
}

export default App
