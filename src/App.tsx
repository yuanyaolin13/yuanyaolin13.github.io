// Dependencies
import './App.css';


// Components
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx'


function App() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-full">
        <NavBar />
        <Hero />
        <Footer />
    </div>
  )
}

export default App
