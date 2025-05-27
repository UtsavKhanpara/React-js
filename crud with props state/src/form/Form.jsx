import React from 'react'

const Form = ({handleSubmit,update,name,email,phone,setEmail,setName,setPhone}) => {
  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <table border={1}>
            <thead>
                <tr>
                    <td>Name:-</td>
                    <td><input type="text " placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type="email " placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Phone:-</td>
                    <td><input type="number " placeholder='Enter Your Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} /></td>
                </tr>
            </thead>
        </table>
        <br />
        {
            update ? <button type='submit'>Update</button> : <button type='submit'>Add</button>
        }
      </form>
    </div>
  )
}

export default Form
