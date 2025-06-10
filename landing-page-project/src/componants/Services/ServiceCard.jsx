import { useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ img, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    const card = document.querySelector(".card");
    card.classList.toggle("hovered");
    setIsHovered(true);
  }
  function handleMouseLeave() {
    const card = document.querySelector(".card");
    card.classList.remove("hovered");
    setIsHovered(false);
  }
  return (
    <div onMouseOver={handleHover} onMouseLeave={handleMouseLeave} className="card">
      <div className="card-image">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      {isHovered? (
      <p>{description}</p>
      ): null}
    </div>
  );
}

export default ServiceCard;
