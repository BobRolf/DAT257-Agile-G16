import React from 'react';

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
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Card;