import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import './App.css'

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">#VanLife</Link>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>&#169; 2024 #VanLife</p>
    </footer>
  )
}

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
