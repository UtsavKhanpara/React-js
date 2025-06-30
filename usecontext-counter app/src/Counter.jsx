import React, { createContext, useState } from 'react'

export const countercontext=createContext();

const Counter = ({children}) => {
  const[no,setNo]=useState(0)

  const inc=()=>{
    setNo(no+1)
  }
  
  return (
    <div align="center">
      <countercontext.Provider value={{no,inc}}>
        {children}
      </countercontext.Provider>
    </div>
  )
}

export default Counter
