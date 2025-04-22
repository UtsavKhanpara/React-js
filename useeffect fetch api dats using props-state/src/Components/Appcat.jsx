import React, { useEffect, useState } from 'react'
import Cat from './Cat'

const Appcat = () => {

  let [cat, setCat] = useState([]);

  let getCat = () => {
    fetch('https://www.freetestapi.com/api/v1/cats')
      .then(res => res.json())
      .then((data) => {
        setCat(data);
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCat()
  }, []);

  return (
    <div>
      <Cat catdata={cat} />
    </div>
  )
}

export default Appcat
