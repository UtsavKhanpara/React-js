import React, { useEffect, useState } from 'react'
import Tv from './Tv'

const Apptv = () => {

  let [ledtv, setTv] = useState([]);

  let getTv = () => {
    fetch(`https://fakestoreapi.in/api/products?page=2`)
      .then(res => res.json())
      .then((tvdata) => {
        setTv(tvdata.products)
        console.log(tvdata.products)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getTv()
  }, []);

  return (
    <div>
      <Tv tv={ledtv} />
    </div>
  )
}

export default Apptv
