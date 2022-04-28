import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContProjects from './components/ContProjects/ContProjects'


function App() {
  

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col justify-between">
      
        <Header/>

        <ContProjects/>

        <Footer/>
      
        
    </div>
  )
}

export default App
