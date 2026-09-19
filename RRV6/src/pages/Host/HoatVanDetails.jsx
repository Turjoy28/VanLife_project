import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const HoatVanDetails = () => {
  const { id } = useParams();
  const [vanDetail, setVanDetail] = React.useState(null)
  
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setVanDetail(data.vans[0]));
  }, [id])

  if (!vanDetail) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <NavLink to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span></NavLink>
      
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={vanDetail.imageUrl} alt={`Photo of ${vanDetail.name}`} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanDetail.type}`}>{vanDetail.type}</i>
            <h3>{vanDetail.name}</h3>
            <h4>${vanDetail.price}/day</h4>
          </div>
        </div>

        <nav className="host-nav">
          <NavLink 
            to="."
            end
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Details
          </NavLink>
          <NavLink 
            to="pricing"
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Pricing
          </NavLink>
          <NavLink 
            to="photos"
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Photos
          </NavLink> 
        </nav>

        <Outlet context={{ currentVan: vanDetail }} />
      </div>
    </section>
  )
}

export default HoatVanDetails
