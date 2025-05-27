import React from 'react'

const View = ({record,handleDelete,handleUpdate,handleRemoveAll}) => {
  return (
    <div align="Center">
      <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                record.map((val,index)=>{
                    const{id,name,email,phone}=val;
                    return(
                        <>  
                            <tr key={val.id}>
                                <td>{++index}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>
                                    <button onClick={()=>handleUpdate(id)}>Edit</button>
                                    <button onClick={()=>handleDelete(id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
      <br />
      <button onClick={handleRemoveAll}>Remove All Task</button>
    </div>
  )
}

export default View
