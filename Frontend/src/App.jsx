import React from 'react'
import { Navbar } from './Components/Navbar'
import { Card } from './Components/Card'
import { Signup } from './Components/Signup'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Card comp={<Signup/>}>
        
    </Card>
    </>
    
  )
}

export default App