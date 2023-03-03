import React from 'react'
import {Routes, Route} from "react-router-dom"
import { GamePage } from './GamePage'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/playgame' element={<GamePage/>}></Route>
    </Routes>
  )
}
