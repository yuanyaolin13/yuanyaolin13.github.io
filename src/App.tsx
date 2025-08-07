// Dependencies
import './App.css';


// Components
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';


function App() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-full">
        <NavBar />
        <Hero />
    </div>
  )
}

export default App
