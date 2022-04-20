import React from 'react'
import map from "../images/map.png"

function Map() {
  return (
    <div  className="mb-2" style={{width:"100%"}}>
            <img src={map} style={{width:"100%",height:"auto",objectFit:"contain"}} alt="" />
    </div>
  )
}

export default Map