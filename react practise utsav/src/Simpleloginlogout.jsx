import React, { useState } from 'react'

const Simpleloginlogout = () => {

    const [login,setLogin]=useState(false);
  return (
    <div>
      <div align="center">
        <h2>Simple Login</h2>
        {
            login ? (
                <div>
                    <h2 style={{color:"green"}}>Welcome YOu are log in</h2>
                    <button onClick={()=> setLogin(false)}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2 style={{color:"blue"}}>Please Log in here</h2>
                    <button onClick={()=> setLogin(true)}>Login</button>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Simpleloginlogout
