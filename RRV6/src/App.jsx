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
import HostVans from './pages/Host/HostVans'
import HoatVanDetails from './pages/Host/HoatVanDetails'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        
        <Route path="/host" element={<HostLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="Income" element={<Income/>}/>
        <Route path="Review" element={<Review/>}/>
        <Route path="vans" element={<HostVans/>}/>
        <Route path="vans/:id" element={<HoatVanDetails/>}/>

        </Route>
        

      </Route>
    </Routes>
  )
}

export default App
