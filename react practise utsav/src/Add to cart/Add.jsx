import React, { useState } from 'react';
import './CartApp.css';

function CartApp() {
  const [cart,setCart] = useState([]);
  const [showCart,setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Shoes',
      price: 1200,
      image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      id: 2,
      name: 'T-Shirt',
      price: 800,
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      id: 3,
      name: 'Watch',
      price: 1500,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
  ];

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
    ));
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="container">
      <header className="header">
        <h2>🛍 My Shop</h2>
        <button onClick={() => setShowCart(!showCart)} className="cart-toggle">
          🛒 Cart ({cart.reduce((a, b) => a + b.qty, 0)})
        </button>
      </header>

      <section className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
          </div>
        ))}
      </section>

      {showCart && (
        <section className="cart-box">
          <h3>🧾 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="empty-cart">Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <strong>{item.name}</strong> - ₹{item.price} × {item.qty} = ₹{item.qty * item.price}
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => increaseQty(item.id)}>➕</button>
                    <button onClick={() => decreaseQty(item.id)}>➖</button>
                    <button onClick={() => deleteItem(item.id)} className="delete-btn">❌</button>
                  </div>
                </div>
              ))}
              <h4 className="total">Total: ₹{total}</h4>
            </>
          )}
        </section>
      )}
    </div>
  );
}

export default CartApp;
