import React, { useEffect, useState } from 'react';

const Snapchat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'https://api.apify.com/v2/datasets/aqfuJsDlsir2G9ZW9/items?token=apify_api_vfRnmnv4UkrKaug2mjxo8jtCWk28ns27iRwW';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        const spotlights = json[0]?.spotlights || [];
        setData(spotlights);
        console.log(spotlights);
      } catch (err) {
        setError("Data load karne mein dikkat aayi.");
      } finally {
        setLoading(false);

      }
    };
    fetchData();
  }, []);


  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>📸 Snapchat Spotlights</h1>


      {/* 📦 Data Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {data.length > 0 ? data.map((item) => (
          <div key={item.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            width: '300px',
            padding: '10px',
            boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
          }}>
            <img
              src={item.thumbnail}
              alt={item.caption}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{item.caption}</h3>
            <p><strong>Author:</strong> {item.author?.username}</p>
            <p><strong>Views:</strong> {item.views}</p>
            <p><strong>Comments:</strong> {item.comments}</p>
            <p><strong>Duration:</strong> {item.duration} sec</p>
            <p><strong>Hashtags:</strong> {item.hashtags?.join(', ')}</p>
            <a href={item.link} target="_blank" rel="noreferrer" style={{ color: "black" }}>
              📺 Watch on Snapchat
            </a>
          </div>
        )) : <p>No spotlight found.</p>}
      </div>
    </div>
  );
};

export default Snapchat;
