import React, { useEffect, useState } from 'react'
import Cars from './Cars'

const Appcars = () => {

  let [car, setCars] = useState([]);

  let getCars = () => {
    fetch('https://www.freetestapi.com/api/v1/cars')
      .then(res => res.json())
      .then((cardata) => {
        setCars(cardata)
        console.log(cardata)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCars()
  }, []);
  return (
    <div>
      <Cars cars={car} />

    </div>
  )
}

export default Appcars
