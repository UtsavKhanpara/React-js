import React, { useState } from 'react'
import DynamicForm from './DynamicForm'

const App = () => {

  const[formInput,setFormInput]=useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    city:"",
    courses:[]
  })
  

  const[formerrors,setFormerrors]=useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    city:"",
    courses:[]
  })


  const changeInput=(e)=>{
    const{name,value,type,checked}=e.target;

    if(type === "checkbox"){
      if(checked){
        setFormInput({
          ...formInput,
          courses:[...formInput.courses,value]
        })
      }else{
        setFormInput({
          ...formInput,
          courses:[...formInput.courses].filter(val=>val != value)
        })
      }
    }else{ 
    setFormInput({
      ...formInput,
      [name]:value
    })
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formInput);

    setFormInput({
      name:"",
      email:"",
      password:"",
      gender:"",
      city:"",
      courses:[]
    })
    
  }

  return (
    <div align="center">
      <DynamicForm/>
      <h1>Registation Form</h1>
      <form onSubmit={handleSubmit}>
          <label>Name:-</label>
          <input type="text" name='name' placeholder='Enter Your Name' onChange={changeInput} value={formInput.name} />
          <br /><br />
          <label>Email:-</label>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={changeInput} value={formInput.email} />
          <br /><br />
          <label>Password:- </label>
          <input type="password" name='password' placeholder='Enter your Password' onChange={changeInput} value={formInput.password} />
          <br /><br />
          <label>Gender:- </label>
          <input type="radio" name='gender' value="male" onChange={changeInput} checked={formInput.gender === "male"} />Male
          <input type="radio" name='gender' value="female" onChange={changeInput} checked={formInput.gender === "female"}/>Female
          <br /><br />
          <label>City:- </label>
          <select name="city" onChange={changeInput} value={formInput.city}>
            <option value=""> --- Select City --- </option>
            <option value="surat">surat</option>
            <option value="rajkot">rajkot</option>
            <option value="mumbai">mumbai</option>
            <option value="vadodra">vadodra</option>
            <option value="bharuch">bharuch</option>
            <option value="valsad">valsad</option>
            <option value="kolkata">kolkata</option>
          </select>
          <br /><br />
          <label>Courses:- </label>
          <input type="checkbox" name='courses' onChange={changeInput} value="html" checked={formInput.courses.includes("html")} />html
          <input type="checkbox" name='courses' onChange={changeInput} value="css" checked={formInput.courses.includes("css")} />css
          <input type="checkbox" name='courses' onChange={changeInput} value="javascript" checked={formInput.courses.includes("javascript")} />javascript
          <input type="checkbox" name='courses' onChange={changeInput} value="reactjs" checked={formInput.courses.includes("reactjs")} />reactjs
          <input type="checkbox" name='courses' onChange={changeInput} value="nodejs" checked={formInput.courses.includes("nodejs")} />nodejs
          <br /><br />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
