import React, { useEffect, useState } from 'react'
import Bird from './Bird'

const Appbird = () => {

  let [bird, setBird] = useState([]);

  let getBird = () => {
    fetch('https://www.freetestapi.com/api/v1/birds')
      .then(res => res.json())
      .then((data) =>{
        setBird(data);
        console.log(data);
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getBird();
  }, []);

  return (
    <div>
      <Bird birddata={bird} />
    </div>
  )
}

export default Appbird;
