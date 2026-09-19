import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  
  return (
    <img 
      src={currentVan.imageUrl} 
      className="host-van-detail-image" 
      alt={`Photo of ${currentVan.name}`}
    />
  )
}

export default HostVanPhotos

