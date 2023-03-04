import React from 'react'
import {Routes,Route} from "react-router-dom"
import ScoreboardPage from '../Components/ScoreboardPage'
import { HomePage } from '../HoamPage/HomePage'
import { Flag } from '../ReactSlider/Flag'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/slider" element={<Flag/>}></Route>
        <Route path="/scoreboard" element={<ScoreboardPage/>}></Route>
    </Routes>
  )
}

export default Allroutes