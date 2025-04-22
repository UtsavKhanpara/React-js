import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';


const Appmobile = () => {

    let[mb,setMobile]=useState([]);


    let getMobile=()=>{
        fetch(`https://api.restful-api.dev/objects`)
        .then(res=>res.json())
        .then((data)=>{
            setMobile(data)
            console.log(data);
        }).catch((e)=>{
            console.log(e);
        })
    }

    useEffect(()=>{
        getMobile();
    },[]);


  return (
    <div>
        <Mobile
            mb={mb}
        />
    </div>
  )
}

export default Appmobile
