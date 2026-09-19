import { Routes, Route, Outlet } from 'react-router-dom'
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
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'
import NotFound from './pages/404page'

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
       
        <Route path="vans/:id" element={<HoatVanDetails/>} >
          <Route index element={<HostVanInfo/>}/>
          <Route path='pricing' element={<HostVanPricing/>}/>
          <Route path='photos' element={<HostVanPhotos/>}/>
        </Route>
        
       </Route> 
       <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
