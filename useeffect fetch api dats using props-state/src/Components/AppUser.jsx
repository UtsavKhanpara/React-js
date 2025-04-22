import React, { useEffect, useState } from 'react'
import User from './User'

const AppUser = () => {

    let [users, setUSer] = useState([]);

    let getusers = () => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data) => {
                setUSer(data.users)
                console.log(data.users)
            }).catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <div>
            <User users={users} />
        </div>
    )
}

export default AppUser
