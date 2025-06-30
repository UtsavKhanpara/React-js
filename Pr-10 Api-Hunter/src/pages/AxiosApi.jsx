import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AxiosApi = () => {
    const [data, setData] = useState([]);

    const axiosData = async () => {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products`);
            setData(data.products);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        axiosData();
    }, [])

    return (
        <div align="center">
            <h1>API Using Axios Method</h1>
            <hr />
            <Link to={'/fetch'}>FETCH API</Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {
                    data.map((p) => {
                        const { id, title, category, price, thumbnail } = p;
                        return (
                            <div key={id} style={{ padding: '10px', width: '20%' }}>
                                <div className="card" style={{ border: '1px solid #000', padding: '10px', height: '380px' }}>
                                    <img src={thumbnail} alt={thumbnail} width={'100%'} />
                                    <div className="card-content">
                                        <h5 style={{ margin: '0' }}>{category}</h5>
                                        <h3 style={{ margin: '0' }}>{title}</h3>
                                        <div className="star" style={{ color: 'orange' }}>
                                            &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                                        </div>
                                        <p style={{ margin: '0' }}>${price}</p>
                                    
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AxiosApi