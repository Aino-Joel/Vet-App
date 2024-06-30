import React from 'react';
import './Cards.css';

const Cards = ({ item }) => {
  return (
    <div className="card">
      <img src={item.urlToImage} alt={item.title} className="cardImage" />
      <div className="cardContent">
        <h2 className="cardTitle">{item.title}</h2>
        <p className="cardDescription">{item.description}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="cardLink">Read more</a>
      </div>
    </div>
  );
};

export default Cards;