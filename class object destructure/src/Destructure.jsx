import React from 'react'

const Destructure = () => {

    let array=[1,2,3,4,5,6,7,8,9,10];

    let[a,b,c,d,e,f,g,h,i,j]=array;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    
    

  return (
    <div>
        <h1>Object Destructure</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Array</th>
                    <th>Square</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((value,index)=>{
                        return(
                            <>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{value}</td>
                                    <td>{value*value}</td>
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

export default Destructure
