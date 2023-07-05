import React from 'react'
import Home from './pages/home/home'
import { IconContext } from "react-icons";


const App = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "20"}}>
      <Home/>
      </IconContext.Provider>
    </div>
  )
}

export default App