import React from 'react'

function LinkItem({ text, isVisible}) {
  
  const className = isVisible ? "navLine visible" : "navLine" 
  return (
    <div style={{position:"relative"}}>
        <h4>{text}</h4>
        <div id={text} className={className}></div>
    </div>
  )
}

export default LinkItem