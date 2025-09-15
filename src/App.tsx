// Dependencies
import './App.css';


// Components
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx'
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-full">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
