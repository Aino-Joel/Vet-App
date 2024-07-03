import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards'; 
import './Feeds.css';

const Feeds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=livestock+veterinary+health+care+training+and+disease+awareness&apiKey=48b7e650259e42208cf8d2bf1a683475');
        setData(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="listContainer">
          {data.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feeds;