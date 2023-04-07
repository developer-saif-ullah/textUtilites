import React from 'react'
import "./app.css"
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';




function App() {
  return (
    <>
    {/* <NavBar/> */}
    <NavBar title="TextUtiles" titlehref="/" about="" home=""/>
    <TextForm heading="Enter the Text to Analyze"/>
    </>
  )
}

export default App
