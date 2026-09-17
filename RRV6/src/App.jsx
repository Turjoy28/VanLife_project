import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <div className="site-wrapper">
   
      <main>

        <Routes path="/" element={<Layout/>}>
           <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </main>
     
    </div>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  )
}

export default App
