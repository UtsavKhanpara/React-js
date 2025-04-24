import React, { useEffect, useState } from 'react'
import './App.css';


const App = () => {

  const category = [
    { id: 1, title: "All" },
    { id: 2, title: "Electronics" },
    { id: 5, title: "Bags" },
    { id: 6, title: "Food" },
    { id: 7, title: "Fashion" },
  ]

    const Products = [
      {
        id: 1,
        name: "Apple MacBook",
        price: 100000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/71O14N5GYLL._SX679_.jpg",
        quantity: 4,
      },
      {
        id: 2,
        name: "iPhone 14 Pro",
        price: 120000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
        quantity: 6,
      },
      {
        id: 3,
        name: "Samsung Galaxy Tab S8",
        price: 60000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/31ezJpaVVQL._SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 8,
      },
      {
        id: 4,
        name: "Apple Watch Series 9",
        price: 45000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/41oSpe+Hd9L._SY300_SX300_.jpg",
        quantity: 10,
      },
      {
        id: 5,
        name: "JBL Bluetooth Speaker",
        price: 5000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/31ZE3H4qTkL._SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 15,
      },
      {
        id: 6,
        name: "boAt Airdopes 141",
        price: 1200,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
        quantity: 20,
      },
      {
        id: 7,
        name: "Sony Bravia 55 inch LED TV",
        price: 75000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/81zPuf-0ETL._SX522_.jpg",
        quantity: 5,
      },
      {
        id: 8,
        name: "Canon EOS 1500D DSLR Camera",
        price: 40000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/51UHoxzInpL._SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 7,
      },
      {
        id: 9,
        name: "Sony PlayStation 5",
        price: 55000,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/31nh0udpAKL._SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 3,
      },
      {
        id: 10,
        name: "Mi Power Bank 20000mAh",
        price: 1800,
        category: "Electronics",
        img: "https://m.media-amazon.com/images/I/21-blaDZp3L._SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 25,
      },
      {
        id: 11,
        name: "Denim Jacket",
        price: 2500,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/81ZrVRgQQLL._SY679_.jpg",
        quantity: 10,
      },
      {
        id: 12,
        name: "Graphic T-Shirt",
        price: 799,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/71zT5dUU+iL._SX522_.jpg",
        quantity: 20,
      },
      {
        id: 13,
        name: "Leather Boots",
        price: 3500,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/51814PzBlRL._SX395_SY395_QL70_FMwebp_.jpg",
        quantity: 6,
      },
      {
        id: 14,
        name: "Skinny Jeans",
        price: 1600,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/51FGak3YOEL._SY679_.jpg",
        quantity: 12,
      },
      {
        id: 15,
        name: "Hoodie",
        price: 1200,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/41BT0HPeROL._SY679_.jpg",
        quantity: 15,
      },
      {
        id: 16,
        name: "Sneakers",
        price: 2700,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/51BxhiVoo6L._SY695_.jpg",
        quantity: 9,
      },
      {
        id: 17,
        name: "Formal Blazer",
        price: 4000,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/417MA5Oop0L._SY679_.jpg",
        quantity: 5,
      },
      {
        id: 18,
        name: "Maxi Dress",
        price: 1800,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/714f31LxhuL._SY679_.jpg",
        quantity: 8,
      },
      {
        id: 19,
        name: "Wrist Watch",
        price: 2200,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/71zun+zSYRL._SX679_.jpg",
        quantity: 14,
      },
      {
        id: 20,
        name: "Sunglasses",
        price: 999,
        category: "Fashion",
        img: "https://m.media-amazon.com/images/I/41W5cQR+aWL._SX679_.jpg",
        quantity: 18,
      },
      {
        id: 21,
        name: "Backpack",
        price: 1500,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/31Tz6u984nL._SY300_SX300_.jpg",
        quantity: 12,
      },
      {
        id: 22,
        name: "Tote Bag",
        price: 899,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/61cAAy4--LL._SX679_.jpg",
        quantity: 20,
      },
      {
        id: 23,
        name: "Messenger Bag",
        price: 1799,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/61DIbk9X7XL._SY675_.jpg",
        quantity: 10,
      },
      {
        id: 24,
        name: "Duffel Bag",
        price: 2200,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/51RZCyZ3I3L._SX679_.jpg",
        quantity: 8,
      },
      {
        id: 25,
        name: "Laptop Bag",
        price: 1300,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/817o1klUflL._SX679_.jpg",
        quantity: 14,
      },
      {
        id: 26,
        name: "Sling Bag",
        price: 749,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/61GwKBMqRVL._SY675_.jpg",
        quantity: 18,
      },
      {
        id: 27,
        name: "Handbag",
        price: 1699,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/61T8HU1uHkL._SY575_.jpg",
        quantity: 11,
      },
      {
        id: 28,
        name: "Clutch",
        price: 599,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/81B1IwK43nL._SY675_.jpg",
        quantity: 16,
      },
      {
        id: 29,
        name: "Travel Trolley Bag",
        price: 4200,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/41TJCU6xc+L._SY300_SX300_.jpg",
        quantity: 6,
      },
      {
        id: 30,
        name: "Waist Bag (Fanny Pack)",
        price: 499,
        category: "Bags",
        img: "https://m.media-amazon.com/images/I/417-RR1RJwL._SY300_SX300_.jpg",
        quantity: 25,
      },
      {
        id: 31,
        name: "Cheese Pizza",
        price: 299,
        category: "Food",
        img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 10,
      },
      {
        id: 32,
        name: "Veg Burger",
        price: 149,
        category: "Food",
        img: "https://images.pexels.com/photos/7828570/pexels-photo-7828570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 15,
      },
      {
        id: 33,
        name: "Grilled Sandwich",
        price: 179,
        category: "Food",
        img: "https://images.pexels.com/photos/29699515/pexels-photo-29699515/free-photo-of-delicious-grilled-vegetable-sandwich-on-wooden-tray.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: 12,
      },
      {
        id: 34,
        name: "Pasta Alfredo",
        price: 229,
        category: "Food",
        img: "https://images.pexels.com/photos/5175578/pexels-photo-5175578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 9,
      },
      {
        id: 35,
        name: "French Fries",
        price: 99,
        category: "Food",
        img: "https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 20,
      },
      {
        id: 36,
        name: "Chocolate Cake",
        price: 349,
        category: "Food",
        img: "https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 7,
      },
      {
        id: 37,
        name: "Veg Biryani",
        price: 249,
        category: "Food",
        img: "https://images.pexels.com/photos/31537385/pexels-photo-31537385/free-photo-of-delicious-biryani-with-boiled-egg-served-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 11,
      },
      {
        id: 38,
        name: "Cold Coffee",
        price: 119,
        category: "Food",
        img: "https://images.pexels.com/photos/28744927/pexels-photo-28744927/free-photo-of-refreshing-iced-latte-with-brownie-on-marble-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 14,
      },
      {
        id: 39,
        name: "Fruit Salad",
        price: 139,
        category: "Food",
        img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 13,
      },
      {
        id: 40,
        name: "Ice Cream Sundae",
        price: 199,
        category: "Food",
        img: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: 16,
      }
    ];
  console.log(Products);

  const [record, setRecord] = useState([]);

  const filterRecord = (title) => {
    if (title === "All") {
      setRecord(Products);
    } else {
      const data = Products.filter((p) => p.category === title);
      setRecord(data);
    }
  } 

  useEffect(() => {
    setRecord(Products)
  }, []);

  return (
    <div className="container">
      <h1>Filter Record</h1>
      {
        category.map((p) => (
          <button key={p.id} onClick={() => filterRecord(p.title)}>
            {p.title}
          </button>
        ))
      }

      <br />

      <h1>Products</h1>
      <div className="products-container">
        {record.map((record, index) => {
          return (
            <div className="card" key={index}>
              <h2>{record.name}</h2>
              <img src={record.img} alt={record.name} />
              <p>Price: ${record.price}</p>
              <p>Category: {record.category}</p>
              <p>Quantity: {record.quantity}</p>
            </div>
          );
        })}
      </div>

    </div>

  )
}

export default App
