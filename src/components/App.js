import React from 'react'

import NavBar from './navbar/NavBar'
import Landing from './Landing/Landing'
import About from './about/About'
import Contact from './contact/Contact'
import Portfolio from './portfolio/Portfolio'
import Footer from './footer/Footer'


import { BrowserRouter as Router} from "react-router-dom";
import './app.css';


function App() {
    return (
        <Router>
            <div className='App'>
                <NavBar />,
                <Landing />,
                <About />,
                <Portfolio />,
                <Contact />,
                <Footer />
            </div>
        </Router>
    )
}









export default App