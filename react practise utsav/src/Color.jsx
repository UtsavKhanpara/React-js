import React from 'react'

const Color = ({color}) => {
  return (
    <div align="center">
      <h1>Color:</h1>
      {
        color.map((val,index)=>{
            return(
                <>
                    <li key={index} style={{color:val}}>{val}</li>
                </>
            )
        })
      }
    </div>
  )
}

export default Color
