import React from 'react'
import { useState } from 'react'

const DynamicForm = () => {

    const[input,setInput]=useState([
        {
            id:'',
            name:'',
            email:'',
            salary:''
        }
    ])

    const addInput=()=>{
       setInput([...input,{id:Math.floor(Math.random()*100000),name:'',email:'',salary:''}])
    }
  return (
    <div align="center">
      <h1>Dynamic Form Component</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Salaray</th>
                <th><button onClick={()=>addInput()}>Add</button></th>
            </tr>
        </thead>
        <tbody>
            {
                input.map((val,index)=>{
                    const{id,name,email,salary}=val;
                    return(
                        <>
                            <tr key={index}>
                                <td>
                                    <input type="text" value={name} placeholder='Enter Full Name' onChange={()=>{
                                        const updateInputs=input.map((item)=>{
                                            return item.id === id ? {...item,name:e.target.value}:item
                                        })
                                        setInput(updateInputs)
                                    }} />
                                </td>
                                <td>
                                    <input type="text" value={email} placeholder='Enter Full Email' onChange={()=>{
                                        const updateInputs=input.map((item)=>{
                                            return item.id === id ? {...item,email:e.target.value}:item
                                        })
                                        setInput(updateInputs)
                                    }} />
                                </td>
                                <td>
                                    <input type="text" value={salary}  placeholder='Enter Full Salary' onChange={()=>{
                                        const updateInputs=input.map((item)=>{
                                            return item.id === id ? {...item,salary:e.target.value}:item
                                        })
                                        setInput(updateInputs)
                                    }} />
                                </td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default DynamicForm
