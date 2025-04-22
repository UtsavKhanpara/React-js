import React, { useEffect, useState } from 'react'
import Politician from './Politician'

const Apppolitician = () => {

  let [politics, setPolitics] = useState([]);

  let getPolitician = () => {
    fetch('https://www.freetestapi.com/api/v1/politicians')
      .then(res => res.json())
      .then((data) => {
        setPolitics(data);
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getPolitician()
  }, []);

  return (
    <div>
      <Politician politicsdata={politics} />
    </div>
  )
}

export default Apppolitician
