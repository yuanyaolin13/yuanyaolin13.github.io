// Dependencies
import 'react'
import './App.css'

// Components
import Hero from './components/Hero.tsx'
import NavBar from './components/NavBar.tsx'


function App() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-full">
        <NavBar/>
        <Hero/>
    </div>
  )
}

export default App
