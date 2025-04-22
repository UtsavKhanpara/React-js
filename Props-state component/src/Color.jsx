import React from 'react'
import './assets/css/Color.css';

const Color = ({color}) => {
  return (
    <div align="center">

        <h1>Color</h1>
        {
            color.map((val)=>{
                return(
                    <>
                        <p style={{color:val}}>{val}</p>
                    </>
                )
            })
        }
        
    </div>
  )
}

export default Color
