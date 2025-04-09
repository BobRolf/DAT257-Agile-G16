import React from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  image: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
};

function Card({ image, title, text, buttonText, buttonLink }: CardProps) {
  return (
    <div className="card" style={{ width: '50rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link>
      </div>
    </div>
  );
}

export default Card;

