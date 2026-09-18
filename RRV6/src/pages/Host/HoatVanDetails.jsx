import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const HoatVanDetails = () => {

  const {id}=useParams();
  const [vanDetail,setVanDetail]=React.useState(null)
  
  React.useEffect(()=>{
    fetch(`/api/host/vans/${id}`)
        .then(res=>res.json())
        .then(data=>setVanDetail(data.vans[0]));
        
  },[id])


  return (
    <>
    <NavLink to=".."
    relative='path'
    >back to all vans</NavLink>
     {(!vanDetail)?
         <div>Loading...</div>: <div className='host-van-single key' key={id}>
        <img src={vanDetail.imageUrl} alt={`Photo of ${vanDetail.name}`} />
         <div className="host-van-info">
                    <h3>{vanDetail.name}</h3>
                    <p>${vanDetail.price}/day</p>
                </div>
           </div>}
    </>
  )
}

export default HoatVanDetails
