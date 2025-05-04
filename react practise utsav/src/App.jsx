import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import Color from './color';
import Todo from './Todo';
import Simpleloginlogout from './Simpleloginlogout';
import Crud from './Crud';
import CartApp from './Add to cart/Add';
import DynamicForm from './DynamicForm';





const App = () => {

  let[no,setNo]=useState(0);//counter app

  let[color]=useState(["red","green","blue","purple"])//colordata

  let[tododata]=useState([
    {id:1,name:"utsav",email:"utsavkhanpara7623@gmail.com",phone:9265729747},
    {id:2,name:"Mituuu",email:"mitudiyora2701@gmail.com",phone:8511937235},
    {id:3,name:"Divyang",email:"divurawal@gmail.com",phone:9028768098},
    {id:4,name:"Shailesh",email:"shaileshnandola@gmail.com",phone:9827836524},
    {id:5,name:"Vansh",email:"Vansh6798@gmail.com",phone:7892673292
}]);//todoview data

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

        <DynamicForm/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 style={{textAlign:"center"}}>Timer App</h1>
      <h2 style={{textAlign:"center"}}>Count:{count}</h2>
      <br />
      <br />
      <br />

      <CartApp/>


      <Crud/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Simpleloginlogout/>
      <Todo
        tododata={tododata}//tododata
      />

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
