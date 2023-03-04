import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreboardPage from './Components/ScoreboardPage';
import { HomePage } from './HoamPage/HomePage';
import Allroutes from './Pages/Allroutes';

function App() {
  return (
    <div className="App">
    {/* <ScoreboardPage/> */}
    {/* <HomePage/> */}
    <Allroutes/>
    </div>
  );
}


export default App;