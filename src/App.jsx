import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContProjects from './components/ContProjects/ContProjects'


function App() {
  

  return (
    <div className="App bg-slate-600 min-h-screen relative">
      
        <Header/>
      
        <ContProjects/>
      
        <Footer/>
      
        
    </div>
  )
}

export default App
