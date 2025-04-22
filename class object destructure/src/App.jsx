import React from 'react'
import Destructure from './Destructure';

const App = () => {

  let data = [
    {
      id: 1,
      name: "John",
      age: 20,
      gender: "male",
      address: "USA",
      phone: 1265674587457,
      email: "john@gmail.com",
      password: "123456",
      role: "admin",
      status: "active",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
    },
    {
      id: 2,
      name: "Gricks",
      age: 25,
      gender: "female",
      address: "USA",
      phone: 1265674587457,
      email: "jane@gmail.com",
      password: "123456898",
      role: "officer",
      status: "deactive",
      created_at: "2022-01-15",
      updated_at: "2022-01-16",
    },
    {
      id: 3,
      name: "Micle",
      age: 25,
      gender: "male",
      address: "Canada",
      phone: 1265674587478,
      email: "micle@gmail.com",
      password: "12345608098",
      role: "parliament",
      status: "none",
      created_at: "2022-08-01",
      updated_at: "2022-08-01",
    },
    {
      id: 4,
      name: "Linda",
      age: 30,
      gender: "female",
      address: "UK",
      phone: 1223344556677,
      email: "linda@hotmail.com",
      password: "lindapass",
      role: "editor",
      status: "active",
      created_at: "2023-02-10",
      updated_at: "2023-03-11",
    },
    {
      id: 5,
      name: "Steve",
      age: 28,
      gender: "male",
      address: "Germany",
      phone: 1334556677889,
      email: "steve@yahoo.com",
      password: "steve123",
      role: "viewer",
      status: "deactive",
      created_at: "2023-01-09",
      updated_at: "2023-01-20",
    },
    {
      id: 6,
      name: "Rachel",
      age: 35,
      gender: "female",
      address: "France",
      phone: 1987654321000,
      email: "rachel@aol.com",
      password: "pass1234",
      role: "moderator",
      status: "active",
      created_at: "2022-05-11",
      updated_at: "2022-06-15",
    },
    {
      id: 7,
      name: "Chris",
      age: 27,
      gender: "male",
      address: "India",
      phone: 9876543212345,
      email: "chris@india.com",
      password: "chrispass",
      role: "admin",
      status: "active",
      created_at: "2022-03-10",
      updated_at: "2022-04-01",
    },
    {
      id: 8,
      name: "Anna",
      age: 24,
      gender: "female",
      address: "Brazil",
      phone: 9988776655443,
      email: "anna@brazil.com",
      password: "anna456",
      role: "user",
      status: "none",
      created_at: "2022-07-18",
      updated_at: "2022-08-18",
    },
    {
      id: 9,
      name: "Tom",
      age: 32,
      gender: "male",
      address: "Australia",
      phone: 8877665544332,
      email: "tom@aus.com",
      password: "tommy123",
      role: "officer",
      status: "active",
      created_at: "2023-01-01",
      updated_at: "2023-01-15",
    },
    {
      id: 10,
      name: "Sophia",
      age: 29,
      gender: "female",
      address: "Italy",
      phone: 7766554433221,
      email: "sophia@italy.com",
      password: "soph123",
      role: "moderator",
      status: "deactive",
      created_at: "2022-09-09",
      updated_at: "2022-10-09",
    },
    {
      id: 11,
      name: "Alex",
      age: 31,
      gender: "male",
      address: "Mexico",
      phone: 6655443322110,
      email: "alex@mexico.com",
      password: "alexpass",
      role: "viewer",
      status: "none",
      created_at: "2023-03-05",
      updated_at: "2023-03-20",
    },
    {
      id: 12,
      name: "Nina",
      age: 26,
      gender: "female",
      address: "Spain",
      phone: 5544332211009,
      email: "nina@spain.com",
      password: "nina456",
      role: "user",
      status: "active",
      created_at: "2022-06-12",
      updated_at: "2022-07-12",
    },
    {
      id: 13,
      name: "Leo",
      age: 33,
      gender: "male",
      address: "Russia",
      phone: 4433221100998,
      email: "leo@russia.com",
      password: "leo789",
      role: "editor",
      status: "deactive",
      created_at: "2023-04-22",
      updated_at: "2023-05-01",
    },
    {
      id: 14,
      name: "Emma",
      age: 23,
      gender: "female",
      address: "Japan",
      phone: 3322110099887,
      email: "emma@japan.com",
      password: "emma321",
      role: "admin",
      status: "none",
      created_at: "2022-12-01",
      updated_at: "2022-12-10",
    },
    {
      id: 15,
      name: "Daniel",
      age: 36,
      gender: "male",
      address: "South Africa",
      phone: 2211009988776,
      email: "daniel@sa.com",
      password: "daniel123",
      role: "parliament",
      status: "active",
      created_at: "2022-10-10",
      updated_at: "2022-10-20",
    },
    {
      id: 16,
      name: "Olivia",
      age: 22,
      gender: "female",
      address: "New Zealand",
      phone: 1100998877665,
      email: "olivia@nz.com",
      password: "olivpass",
      role: "viewer",
      status: "deactive",
      created_at: "2023-02-14",
      updated_at: "2023-03-01",
    },
    {
      id: 17,
      name: "Henry",
      age: 40,
      gender: "male",
      address: "Norway",
      phone: 9988776655441,
      email: "henry@norway.com",
      password: "henry007",
      role: "user",
      status: "active",
      created_at: "2022-11-11",
      updated_at: "2022-12-01",
    },
    {
      id: 18,
      name: "Lucy",
      age: 21,
      gender: "female",
      address: "Sweden",
      phone: 8877665544330,
      email: "lucy@sweden.com",
      password: "lucy123",
      role: "moderator",
      status: "none",
      created_at: "2023-03-03",
      updated_at: "2023-03-18",
    },
    {
      id: 19,
      name: "Max",
      age: 38,
      gender: "male",
      address: "Finland",
      phone: 7766554433228,
      email: "max@finland.com",
      password: "maxpass",
      role: "officer",
      status: "active",
      created_at: "2022-05-01",
      updated_at: "2022-05-15",
    },
    {
      id: 20,
      name: "Daisy",
      age: 34,
      gender: "female",
      address: "Netherlands",
      phone: 6655443322117,
      email: "daisy@nl.com",
      password: "daisy456",
      role: "editor",
      status: "deactive",
      created_at: "2022-04-10",
      updated_at: "2022-04-20",
    }
  ];
  
console.log(data);


  
  return (
    <div align="center">

      <Destructure/>
      <h1>Object Destructure</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Status</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val,index)=>{

          let {id,name,age,gender,address,phone,email,password,role,status,created_at,updated_at}=val;
              return(
                <>
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{role}</td>
                    <td>{status}</td>
                    <td>{created_at}</td>
                    <td>{updated_at}</td>
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

export default App
