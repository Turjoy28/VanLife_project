import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
  const { currentVan } = useOutletContext()

  return (
    <section className="host-van-detail-info">
      <div className="host-van-detail-row">
        <h4>Name:</h4>
        <span>{currentVan.name}</span>
      </div>
      <div className="host-van-detail-row">
        <h4>Category:</h4>
        <span style={{ textTransform: 'capitalize' }}>{currentVan.type}</span>
      </div>
      <div className="host-van-detail-row">
        <h4>Description:</h4>
        <span>{currentVan.description}</span>
      </div>
      <div className="host-van-detail-row">
        <h4>Visibility:</h4>
        <span>Public</span>
      </div>
    </section>
  )
}

export default HostVanInfo

