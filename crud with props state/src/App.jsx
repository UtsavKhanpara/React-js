import React, { use, useState } from 'react'
import Form from './form/Form'
import View from './table/View'

const App = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[update,setUpdate]=useState("");
  const[record,setRecord]=useState(JSON.parse(localStorage.getItem("users")) || [] )

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!name || !email || !phone){
      alert("All Filed Required")
      return;
    }

    if(update){
      const updateRecord=record.map((data)=>{
        return data.id === update 
        ? {id:update,name,email,phone}
        : data;
      })
      localStorage.setItem("users",JSON.stringify(updateRecord))
      setRecord(updateRecord);
      alert("Record Updated")
      setUpdate("");
    }else{
      const newRecord=[...record,{id:Math.floor(Math.random()*10000),name,email,phone}]
      localStorage.setItem("users",JSON.stringify(newRecord))
      setRecord(newRecord);
      alert("Record Added")
    }
    setName("");
    setEmail("");
    setPhone("");
  }

  const handleDelete=(id)=>{
    const deletedata=record.filter(data=>data.id != id)
    localStorage.setItem("users",JSON.stringify(deletedata))
    setRecord(deletedata)
    alert("Record Deleted")
  }

  const handleUpdate=(id)=>{
    const update=record.find((data)=>data.id === id)
    setName(update.name)
    setEmail(update.email)
    setPhone(update.phone)
    setUpdate(id)
  }

  const handleRemoveAll=()=>{
    setRecord([]);
    localStorage.setItem
    alert("All Record Deletd")
  }

  return (
    <div>
      <h1 align="center">React crud using props state</h1>
      <Form
        handleSubmit={handleSubmit}
        update={update}
        name={name}
        email={email}
        phone={phone}
        setEmail={setEmail}
        setName={setName}
        setPhone={setPhone}
      /><br></br>
      <View
        record={record}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  )
}

export default App
