import { Link } from "react-router-dom";

type CardProps = {
  image: string; // URL of the image
  title: string; // Title of the card
  text: string; // Description text of the card
  buttonText: string; // Text for the button
  buttonLink: string; // Link for the button
};

function Card({ image, title, text, buttonText, buttonLink }: CardProps) {
  return (
    <div className="card" style={{ width: "50rem" }}>
      <img src={image || ""} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
        <Link to={buttonLink} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Card;
