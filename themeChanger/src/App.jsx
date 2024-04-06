import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/cart'
import useTheme, { ThemeProvider } from './Context/theme'

function App() {
  const [count, setCount] = useState(0)
  const [themMode, setThemMode] = useState('dark')
  
  const darkTheme=()=>{
  

    setThemMode('dark')

  }
  
  const lightTheme=()=>{
    setThemMode(()=>'light')
  }
  useEffect(() => {
    let htmlelm=document.querySelector('html')
    htmlelm.classList.remove('dark','light')
    htmlelm.classList.add(themMode)
    
  }, [themMode])
  
  return (
    <ThemeProvider value={{Mode:themMode,
    darkMode:darkTheme,
    lightMode:lightTheme}}>
    <div className='w-full h-screen flex items-center justify-center'>

    <Cart courseName="Laptop Course" Price="$33"/>
    </div>
      </ThemeProvider>

  )
}

export default App
