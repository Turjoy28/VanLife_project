import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Review from './pages/Host/Review'
import HostLayout from './components/HostLayout'

function App() {
  return (
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        
        <Route element={<HostLayout/>}>
        <Route path="/host" element={<Dashboard/>}/>
        <Route path="/host/Income" element={<Income/>}/>
        <Route path="/host/Review" element={<Review/>}/>
        </Route>
        

      </Route>
    </Routes>
  )
}

export default App
