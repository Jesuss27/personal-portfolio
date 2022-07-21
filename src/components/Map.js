import React from 'react'
import map from "../images/map.png"

function Map() {
  return (
    <div  className="mb-2 d-flex justify-center" style={{width:"100%"}}>
            <img src={map} style={{width:"100%",height:"auto",objectFit:"contain",maxWidth:"500px",margin:"auto"}} alt="" />
    </div>
  )
}

export default Map