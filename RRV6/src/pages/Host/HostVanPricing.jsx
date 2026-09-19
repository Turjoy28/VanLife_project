import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const { currentVan } = useOutletContext()

  return (
    <section className="host-van-priced-section">
      <h3 className="host-van-price">
        <span className="price-symbol">$</span>
        {currentVan.price}
        <span className="price-unit">/day</span>
      </h3>
    </section>
  )
}

export default HostVanPricing

