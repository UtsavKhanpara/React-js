import React from 'react'
import Counter from './Counter'


const A= ({no,inc,dec,res,showUserBtn,removeUserBtn,alluser}) => {
  return (
    <div align="center">
      <h1>Component A</h1>
      <h2>Counter App</h2>
      <h3>Count:{no}</h3>
      <button onClick={inc}>+</button>
      <button disabled={no==0} onClick={dec}>-</button>
      <button disabled={no==0} onClick={res}>Reset</button>
      <br /><br />
      
      <br /><br />

      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Salary</th>
                <th>Counry</th>
            </tr>
        </thead>
        <tbody>
            {
                alluser.map((item,index)=>{
                    return(
                        <>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.salary}</td>
                                <td>{item.country}</td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
      <br />
      <th><button onClick={()=>showUserBtn()}>ShowUSers</button></th>
      <th><button onClick={()=>removeUserBtn()}>Removeuser</button></th>
    </div>
  )
}

export default Counter(A);
