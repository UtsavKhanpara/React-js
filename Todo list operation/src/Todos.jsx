import React, { useState } from 'react'

const Todos = () => {

  const[input,setInput]=useState([
    {
      id:Math.random(Math.floor()*10000),
      name:"",
      email:"",
      salary:""
    }
  ])

  const addInput=()=>{
    setInput([...input,{id:Math.floor(Math.random()*10000),name:"",email:"",salary:""}])
  }

  const removeInput=(id)=>{
    setInput(input.filter(item=>item.id != id))
  }

  const handleChangeInput=(e,id)=>{
    const{name,value}=e.target;
    const updatedInputs=input.map(item=>item.id === id ? {...item,[name]:value}:item)
    setInput(updatedInputs)
  }

  const handleSubmit=()=>{
    console.log("submmited Form",input);
    setInput([
      {
        id:"",
        name:"",
        email:"",
        salary:""
      }
    ])
    
  }


  return (
    <div align="center">
      <h1>React Table Row Add & Delete Dynamiclly</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>
              <button onClick={()=>addInput()}>Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            input.map((item,index)=>{
              const{id,name,email,salary}=item;
              return(
                <>  
                    <tr key={item.id}>
                      <td>
                        <input type="text"
                        name='name'
                        placeholder='Enter Your Name'
                        onChange={(e)=>handleChangeInput(e,item.id)} />
                      </td>
                      <td>
                        <input type="email"
                        name='email'
                        placeholder='Enter Your Email'
                        onChange={(e)=>handleChangeInput(e,item.id)} />
                      </td>
                      <td>
                        <input type="number"
                        name='salary'
                        placeholder='Enter Your Salary'
                        onChange={(e)=>handleChangeInput(e,item.id)} />
                      </td>
                      <td>
                        {
                          index > 0 && (
                            <button onClick={()=>removeInput(item.id)}>x</button>
                          )
                        }
                      </td>
                    </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
      <br /><br />
      <button onClick={()=>handleSubmit()}>Submit</button>
    </div>
  )
}

export default Todos
