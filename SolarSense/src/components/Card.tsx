import { Link } from "react-router-dom";

type CardProps = {
  image?: string; // URL of the image
  imageStyle?: React.CSSProperties;
  title: string; // Title of the card
  text: string; // Description text of the card
  buttonText?: string; // Text for the button
  buttonLink: string; // Link for the button
  children?: React.ReactNode; // Children elements to be rendered inside the card
};

function Card({
  image,
  imageStyle,
  title,
  text,
  buttonText,
  buttonLink,
  children,
}: CardProps) {
  return (
    <div className="card" style={{ width: "50rem" }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={imageStyle}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
        <Link to={buttonLink} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
      <>{children}</>
    </div>
  );
}

export default Card;
