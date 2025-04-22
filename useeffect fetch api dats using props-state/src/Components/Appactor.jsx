import React, { useEffect, useState } from 'react'
import Actor from './Actor'

const Appactor = () => {

  let [actor, setActor] = useState([]);

  let getActor = () => {
    fetch('https://www.freetestapi.com/api/v1/actors')
      .then(res => res.json())
      .then((data) => {
        setActor(data)
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getActor();
  }, []);

  return (
    <div>
      <Actor actordata={actor} />
    </div>
  )
}

export default Appactor
