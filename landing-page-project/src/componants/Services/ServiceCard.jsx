import { useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ img, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  function handleHover() {
    if(!isTouchDevice){
    const card = document.querySelector(".card");
    card.classList.toggle("hovered");
    setIsHovered(true);
    }
  }

  function handleMouseLeave() {
    if(!isTouchDevice){
    const card = document.querySelector(".card");
    card.classList.remove("hovered");
    setIsHovered(false);
}
  }
  function handleClick() {
    if (isTouchDevice) {
      const card = document.querySelector(".card");
      const isCurrentlyHovered = card.classList.contains("hovered");
      card.classList.toggle("hovered");
      setIsHovered(!isCurrentlyHovered);
    }
  }
  return (
    <div onMouseOver={handleHover} onMouseLeave={handleMouseLeave} onClick={handleClick} className="card">
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
