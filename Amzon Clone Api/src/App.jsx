import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [videoLinks, setVideoLinks] = useState([]);


  const getAmazon = () => {
    fetch(`https://amzon.free.beeceptor.com/utsav/data`)
      .then(res => res.json())
      .then((give) => {
        setRecord([give.data]); // object to array
      }).catch((e) => {
        console.error('Error fetching data:', e);
      });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      const query = encodeURIComponent(searchTerm.trim());
      window.location.href = `https://www.amazon.in/s?k=${query}`;
    }
  };

  useEffect(() => {
    getAmazon();
  }, []);

  useEffect(() => {
    fetch('https://mocki.io/v1/2e13fc4c-abec-48c7-922a-585876b1cf04')
      .then(response => response.json())
      .then(data => {
        setVideoLinks(data.videos);
      })
      .catch(error => {
        console.error('Error fetching video links:', error);
      });
  }, []);


  return (
    <div>
      {/* Header */}
      <div className="amazon-header">
        <div className="amazon-logo">Amazon.in</div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="header-options">
          <span>Hello, Sign in</span>
          <span>Returns & Orders</span>
          <span>🛒 Cart</span>
        </div>
      </div>

      {/* Category Bar */}
      <div className="category-bar">
        <span>All</span>
        <span>Mobiles</span>
        <span>Best Sellers</span>
        <span>Fashion</span>
        <span>Electronics</span>
        <span>Prime</span>
        <span>Home & Kitchen</span>
        <span>Appliances</span>
        <span>Books</span>
        <span>New Releases</span>
        <span>Computers</span>
        <span>Amazon Pay</span>
      </div>

      {/* Title */}
      <div align="center">
        <h1>Amazon Clone</h1>

        <div className="video-section" style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
          {videoLinks.map((url, index) => (
            <video key={index} width="200" controls autoPlay muted loop>
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        {/* Product Table */}
        {record.map((val, index) => (
          <div key={index} className="card-table-wrapper">
            <h2>{val.product_title}</h2>
            <img src={val.product_photo} alt="Product" className="table-product-image" />

            <table className="product-table">
              <tbody>
                <tr><th>ASIN</th><td>{val.asin}</td></tr>
                <tr><th>Price</th><td>{val.product_price}</td></tr>
                <tr><th>Max Price</th><td>{val.product_price_max}</td></tr>
                <tr><th>Currency</th><td>{val.currency}</td></tr>
                <tr><th>Country</th><td>{val.country}</td></tr>
                <tr><th>By</th><td><a href={val.product_byline_link} target="_blank" rel="noreferrer">{val.product_byline}</a></td></tr>
                <tr><th>Rating</th><td>⭐ {val.product_star_rating} ({val.product_num_ratings} ratings)</td></tr>
                <tr><th>Availability</th><td>{val.product_availability}</td></tr>
                <tr><th>Sales Volume</th><td>{val.sales_volume}</td></tr>
                <tr><th>Description</th><td>{val.product_description}</td></tr>

                <tr><th>Seller Star Rating</th><td>⭐ {val.seller_star_rating} ({val.seller_star_rating_info})</td></tr>

                <tr><th>Customer Feedback</th><td>{val.customers_say}</td></tr>
                <tr><th>Delivery</th><td>{val.delivery}</td></tr>
              </tbody>
            </table>

            <h4>About Product:</h4>
            <ul>
              {val.about_product?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4>Product Information:</h4>
            <table className="product-table">
              <tbody>
                {Object.entries(val.product_information).map(([key, value], i) => (
                  <tr key={i}><th>{key}</th><td>{value}</td></tr>
                ))}
              </tbody>
            </table>

            <h4>Product Details:</h4>
            <table className="product-table">
              <tbody>
                {Object.entries(val.product_details).map(([key, value], i) => (
                  <tr key={i}><th>{key}</th><td>{value}</td></tr>
                ))}
              </tbody>
            </table>

            <h4>Categories:</h4>
            <ul>
              {val.category_path.map((cat, i) => (
                <li key={i}><a href={cat.link} target="_blank" rel="noreferrer">{cat.name}</a></li>
              ))}
            </ul>

            <h4>Rating Distribution:</h4>
            <table className="product-table">
              <tbody>
                {Object.entries(val.rating_distribution || {}).map(([star, count], i) => (
                  <tr key={i}><th>{star}⭐</th><td>{count} votes</td></tr>
                ))}
              </tbody>
            </table>

            <h4>Product Offers:</h4>
            {val.product_offers.map((offer, i) => (
              <table className="product-table" key={i}>
                <tbody>
                  <tr><th>Price</th><td>{offer.product_price}</td></tr>
                  <tr><th>Condition</th><td>{offer.product_condition}</td></tr>
                  <tr><th>Seller</th><td><a href={offer.seller_link} target="_blank" rel="noreferrer">{offer.seller}</a></td></tr>
                  <tr><th>Delivery Time</th><td>{offer.delivery_time}</td></tr>
                </tbody>
              </table>
            ))}

            <p style={{ marginTop: '20px' }}>
              <a href={val.product_url} target="_blank" rel="noreferrer">🔗 View on Amazon</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
