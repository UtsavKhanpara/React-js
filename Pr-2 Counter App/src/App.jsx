import React, { useState } from 'react'
import Counter from './Counter'


const App = () => {

  let [no, setNo] = useState(0)

  function Increment() {
    setNo(no + 1)
  }
  function Decrement() {
    setNo(no - 1)
  }
  function Reset() {
    setNo(0)
  }


  return (
    <>
      <div align="center">

        <Counter
          no={no}
          inc={Increment}
          dec={Decrement}
          reset={Reset}
        />
       

      </div>
    </>
  )
}


export default App
