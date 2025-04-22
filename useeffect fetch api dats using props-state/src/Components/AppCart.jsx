import React, { useEffect, useState } from 'react'
import Cart from './Cart'

const AppCart = () => {
    const [cart, setCart] = useState([]);

    const getCart = () => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then((data) => {
                console.log(data.carts);
                setCart(data.carts); // Update the state
            }).catch((e) => {
                console.log(e)
            })
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div>
            <Cart cartsdata={cart} />
        </div>
    );
};

export default AppCart;
