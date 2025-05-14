import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import Color from './color';
import Simpleloginlogout from './Simpleloginlogout';
import Crud from './Crud';
import DynamicForm from './DynamicForm';





const App = () => {

  let[no,setNo]=useState(0);//counter app

  let[color]=useState(["red","green","blue","purple"])//colordata

  

    let[count,setCount]=useState(0);


  function increment(){
    setNo(no+1);
  }//counter app function
  function decrement(){
    setNo(no-1);
  }//counter app function
  function reset(){
    setNo(0);
  }//counter app function

  useEffect(()=>{
    setTimeout(() => {
      setCount(count+1);
    },1000);
  })//timer app function


  return (

  
    <div>
       
       
    
   
      <h1 style={{textAlign:"center"}}>Timer App</h1>
      <h2 style={{textAlign:"center"}}>Count:{count}</h2>
      <br />
      <br />
      <br />

      
      <DynamicForm/>

      <Crud/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Simpleloginlogout/>
    
      <Color
        color={color}//color
      />

      <Counter
        no={no}
        increment={increment}
        decrement={decrement}
        reset={reset}//counter
      />
    </div>
  )
}

export default App
