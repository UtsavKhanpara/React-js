import React, { useEffect, useState } from 'react'
import Jsonholderimg from './Jsonholderimg'

const Appjsonholderimg = () => {

  let [img, setImg] = useState([]);

  let getimage = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then((data) => {
        setImg(data);
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getimage()
  }, []);

  return (
    <div>
      <Jsonholderimg imgdata={img} />
    </div>
  )
}

export default Appjsonholderimg
