import React from 'react'

function GlowBall({color , location , value}) {


    
    const style = {
        width: `0`,
        heigth: `0`,
        borderRadius: `50%`,
        background: `transparent`,
        boxShadow: `0 0 900px 100px ${color}`,
        position: `absolute`,
        [location]: value,
        zIndex: `-10`
    }
  return (
    <div style={style}></div>
  )
}

export default GlowBall