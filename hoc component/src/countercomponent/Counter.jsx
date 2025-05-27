import React, { useState } from 'react'

const Counter = (Wrappedcomponent) => {
    return () => {

        const [no, setNo] = useState(0)

        const [user, setUser] = useState([
            {
                name: "utsav",
                phone: 9265729747,
                salary: "50000",
                country: "India",
            },
            {
                name: "Sarthak",
                phone: 9268789747,
                salary: "32323",
                country: "Mexico",
            },
            {
                name: "Divyang",
                phone: 9787879747,
                salary: "299029",
                country: "USA",
            },
            {
                name: "Vansh",
                phone: 9203947483,
                salary: "90000",
                country: "Canada",
            },
            {
                name: "Harshit",
                phone: 9866773534,
                salary: "12000",
                country: "Nizeria",
            }
        ])

        const [alluser, setAllUser] = useState([]);

        const inc = () => {
            setNo(no + 1)
        }
        const dec = () => {
            setNo(no - 1)
        }
        const res = () => {
            setNo(0)
        }

        const showuser = () => {
            setAllUser(user)
        }

        const removeuser = () => {
            setAllUser([])
        }


        return (
            <Wrappedcomponent no={no} inc={inc} dec={dec} res={res} showUserBtn={showuser} removeUserBtn={removeuser} alluser={alluser} />
        )
    }
}

export default Counter
