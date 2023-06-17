import React from 'react'
import TopContent from './TopContent';
import Highlights from './Highlights';
import Description from './Description';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



const Homepage = () => {
  return (
    <div>
        <TopContent/>
        <Description/>
        <Highlights/>
        
    </div>
  )
}

export default Homepage