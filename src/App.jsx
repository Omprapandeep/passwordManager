import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
   const [theme,settheme]=useState(true);  

  return (
    <>
    <Navbar theme={theme} settheme={settheme} />
    <Manager theme={theme} />
    
    </>
  )
}

export default App
