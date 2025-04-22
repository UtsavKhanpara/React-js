import React, { useEffect, useState } from 'react'
import Recipi from './Recipi'

const AppRecipi = () => {

  let [food, setFood] = useState([]);


  let getrecipi = () => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((d) => {
        setFood(d.recipes)
        console.log(d.recipes);
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getrecipi();
  }, []);
  return (
    <div>
      <Recipi food={food} />
    </div>
  )
}

export default AppRecipi
