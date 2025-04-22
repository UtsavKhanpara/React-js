import React, { useEffect, useState } from 'react'

const App = () => {

    const category = [

        { id: 1, name: "All" },
        { id: 2, name: "Men" },
        { id: 3, name: "Women" },
        { id: 4, name: "Kids" },

    ]

    const Products = [

        { id: 1, category: "All", price: 12000, quantity: 10 },
        { id: 2, category: "All", price: 13000, quantity: 5 },
        { id: 3, category: "All", price: 14000, quantity: 20 },
        { id: 4, category: "All", price: 15000, quantity: 63 },
        { id: 5, category: "Men", price: 19000, quantity: 98 },
        { id: 6, category: "Men", price: 20000, quantity: 51 },
        { id: 7, category: "Men", price: 22000, quantity: 22 },
        { id: 8, category: "Men", price: 90000, quantity: 67 },
        { id: 9, category: "Women", price: 120000, quantity: 89 },
        { id: 10, category: "Women", price: 130000, quantity: 34 },
        { id: 11, category: "Women", price: 140000, quantity: 70 },
        { id: 12, category: "Women", price: 150000, quantity: 80 },
        { id: 13, category: "Kids", price: 190000, quantity: 12 },
        { id: 14, category: "Kids", price: 200000, quantity: 9 },
        { id: 15, category: "Kids", price: 220000, quantity: 27 },
        { id: 16, category: "Kids", price: 900000, quantity: 93 },

    ]

    const[record,setRecord]=useState([]);   

    const filterRecotd=(name)=>{
        if(name==="All"){
            setRecord(Products)
        }else{
            let data=Products.filter((p)=>p.category===name);
            setRecord(data);
        }
    }

    
     useEffect(()=>{
        setRecord(Products)
     },[])


    return (
       <div align="center">
        <h1>Filter Record</h1>
        {
            category.map((c,i)=>{
                return(
                    <>
                        <button key={i} onClick={()=>filterRecotd(c.name)}>{c.name}</button>
                    </>
                )
            })
        }

        <h2>Products</h2>
        {
            record.map((p,i)=>{
                return(
                    <>
                        <h3>Id:-{p.id}</h3>
                        <h3>Category:-{p.category}</h3>
                        <h3>Price:-{p.price}</h3>
                        <h3>Quantity:-{p.quantity}</h3>
                    </>
                )
            })
        }
       </div>
    )
}

export default App
