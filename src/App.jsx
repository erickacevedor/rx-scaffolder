import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import About from './pages/About/About'

function App() {
  return (
    <Router>
      <>

        {/* Footer */}

        <Nav />




        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>


        {/* Footer */}
        <Footer />

      </>
    </Router>
  )
}

export default App
