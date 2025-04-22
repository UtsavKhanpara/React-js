import React, { useState } from 'react'
import Counter from './Counter'
import Color from './color'
import Employdata from './Employdata'

const App = () => {

  let [no, setNo] = useState(0)

  let [colors] = useState(["red", "green", "blue"])

  let [employData] = useState(
    [
      {
        "empid": 1,
        "empname": "Utsav",
        "empemail": "utsav@gmail.com",
        "empphone": 12345,
        "empaddress": {
          "country": "India",
          "state": "Gujarat",
          "city": "Surat",
          "area": "Motavarachha"
        },
        "empdeg": "Junior",
        "empsalary": 23000,
        "empdepartment": "UI/UX"
      },
      {
        "empid": 2,
        "empname": "Amit",
        "empemail": "amit@gmail.com",
        "empphone": 67890,
        "empaddress": {
          "country": "India",
          "state": "Maharashtra",
          "city": "Mumbai",
          "area": "Andheri"
        },
        "empdeg": "Senior",
        "empsalary": 55000,
        "empdepartment": "Development"
      },
      {
        "empid": 3,
        "empname": "Priya",
        "empemail": "priya@gmail.com",
        "empphone": 23456,
        "empaddress": {
          "country": "India",
          "state": "Karnataka",
          "city": "Bangalore",
          "area": "Koramangala"
        },
        "empdeg": "Mid-Level",
        "empsalary": 45000,
        "empdepartment": "Marketing"
      },
      {
        "empid": 4,
        "empname": "Rohan",
        "empemail": "rohan@gmail.com",
        "empphone": 78901,
        "empaddress": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur",
          "area": "Malviya Nagar"
        },
        "empdeg": "Junior",
        "empsalary": 25000,
        "empdepartment": "Finance"
      },
      {
        "empid": 5,
        "empname": "Neha",
        "empemail": "neha@gmail.com",
        "empphone": 34567,
        "empaddress": {
          "country": "India",
          "state": "Tamil Nadu",
          "city": "Chennai",
          "area": "Anna Nagar"
        },
        "empdeg": "Senior",
        "empsalary": 60000,
        "empdepartment": "HR"
      },
      {
        "empid": 6,
        "empname": "Vikas",
        "empemail": "vikas@gmail.com",
        "empphone": 89012,
        "empaddress": {
          "country": "India",
          "state": "West Bengal",
          "city": "Kolkata",
          "area": "Salt Lake"
        },
        "empdeg": "Mid-Level",
        "empsalary": 48000,
        "empdepartment": "Development"
      },
      {
        "empid": 7,
        "empname": "Sneha",
        "empemail": "sneha@gmail.com",
        "empphone": 45678,
        "empaddress": {
          "country": "India",
          "state": "Punjab",
          "city": "Amritsar",
          "area": "Ranjit Avenue"
        },
        "empdeg": "Junior",
        "empsalary": 27000,
        "empdepartment": "UI/UX"
      },
      {
        "empid": 8,
        "empname": "Karan",
        "empemail": "karan@gmail.com",
        "empphone": 90123,
        "empaddress": {
          "country": "India",
          "state": "Haryana",
          "city": "Gurgaon",
          "area": "Cyber City"
        },
        "empdeg": "Senior",
        "empsalary": 62000,
        "empdepartment": "Operations"
      },
      {
        "empid": 9,
        "empname": "Meera",
        "empemail": "meera@gmail.com",
        "empphone": 56789,
        "empaddress": {
          "country": "India",
          "state": "Kerala",
          "city": "Kochi",
          "area": "MG Road"
        },
        "empdeg": "Mid-Level",
        "empsalary": 47000,
        "empdepartment": "Customer Support"
      },
      {
        "empid": 10,
        "empname": "Suresh",
        "empemail": "suresh@gmail.com",
        "empphone": 23456,
        "empaddress": {
          "country": "India",
          "state": "Uttar Pradesh",
          "city": "Lucknow",
          "area": "Hazratganj"
        },
        "empdeg": "Junior",
        "empsalary": 28000,
        "empdepartment": "Sales"
      },
      {
        "empid": 11,
        "empname": "Pooja",
        "empemail": "pooja@gmail.com",
        "empphone": 67890,
        "empaddress": {
          "country": "India",
          "state": "Madhya Pradesh",
          "city": "Bhopal",
          "area": "Arera Colony"
        },
        "empdeg": "Senior",
        "empsalary": 58000,
        "empdepartment": "Legal"
      },
      {
        "empid": 12,
        "empname": "Ankit",
        "empemail": "ankit@gmail.com",
        "empphone": 78901,
        "empaddress": {
          "country": "India",
          "state": "Telangana",
          "city": "Hyderabad",
          "area": "Gachibowli"
        },
        "empdeg": "Mid-Level",
        "empsalary": 46000,
        "empdepartment": "Engineering"
      },
      {
        "empid": 13,
        "empname": "Ritika",
        "empemail": "ritika@gmail.com",
        "empphone": 34567,
        "empaddress": {
          "country": "India",
          "state": "Odisha",
          "city": "Bhubaneswar",
          "area": "Jayadev Vihar"
        },
        "empdeg": "Junior",
        "empsalary": 26000,
        "empdepartment": "Content Writing"
      },
      {
        "empid": 14,
        "empname": "Yash",
        "empemail": "yash@gmail.com",
        "empphone": 89012,
        "empaddress": {
          "country": "India",
          "state": "Chhattisgarh",
          "city": "Raipur",
          "area": "Pandri"
        },
        "empdeg": "Senior",
        "empsalary": 64000,
        "empdepartment": "Data Science"
      },
      {
        "empid": 15,
        "empname": "Simran",
        "empemail": "simran@gmail.com",
        "empphone": 45678,
        "empaddress": {
          "country": "India",
          "state": "Jharkhand",
          "city": "Ranchi",
          "area": "Kanke Road"
        },
        "empdeg": "Mid-Level",
        "empsalary": 49000,
        "empdepartment": "Product Management"
      }
    ]
    
  )

  function Increment() {
    setNo(no + 1)
  }
  function Decrement() {
    setNo(no - 1)
  }
  function Reset() {
    setNo(0)
  }


  return (
    <>
      <div align="center">

        <Counter
          no={no}
          inc={Increment}
          dec={Decrement}
          reset={Reset}
        />
        <Color
          color={colors}
        />
        <Employdata
          employ={employData}
        />

      </div>
    </>
  )
}


export default App
