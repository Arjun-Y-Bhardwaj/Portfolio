import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {

    return (
        <>
            <div className='bg-purple-900 text-white inset-0'>
                <Header />
                <Navbar />
                <Home />
                <About />
                <Project />
                <Contact />
            </div>
        </>
    )
}



export default App
