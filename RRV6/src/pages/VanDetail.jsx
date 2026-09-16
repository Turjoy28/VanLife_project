import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function VanDetail() {
  const { id } = useParams()
  const [van, setVan] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.van)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }

  return (
    <div className="van-detail-container">
      <Link to="/vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      )}
    </div>
  )
}

