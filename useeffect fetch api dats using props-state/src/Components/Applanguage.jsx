import React, { useEffect, useState } from 'react'
import Language from './Language'

const Applanguage = () => {

    let [lan, setLan] = useState([]);

    let getLanguage = () => {
        fetch('https://www.freetestapi.com/api/v1/languages')
            .then(res => res.json())
            .then((data) => {
                setLan(data);
                console.log(data)
            }).catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getLanguage()
    }, []);

    return (
        <div>
            <Language landata={lan} />
        </div>
    )
}

export default Applanguage
