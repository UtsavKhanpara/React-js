import React, { useEffect, useState } from 'react'
import Airpot from './Airpot'

const Appairpot = () => {

  let [airpot, setAirpot] = useState([]);

  let getAirpot = () => {
    fetch(`https://www.freetestapi.com/api/v1/airports`)
      .then(res => res.json())
      .then((data) => {
        setAirpot(data);
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getAirpot();
  }, []);


  return (
    <div>
      <Airpot airpotdata={airpot} />
    </div>
  )
}

export default Appairpot
