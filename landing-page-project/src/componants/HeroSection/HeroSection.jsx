import { useState } from "react";
import heroImg from "../../assets/Bright Yellow and Black Photographic Fitness Service Website.png";
import "./HeroSection.css";
import Popup from "../Popup/Popup";
function HeroSection() {
  const [btn, setBtn] = useState(false);
  function handleClickBtn() {
    document.body.style.overflow = 'hidden';
    setBtn(true)
  }
  function handleCancleBtn() {
    document.body.style.overflow = 'auto';
    setBtn(false)
  };
  const style = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "780px",
  };
  return (
    <div style={style} className="hero-section" id="hero">
      <p>
        BE YOUR <span className="spanBest">BEST</span>
      </p>
      <button onClick={handleClickBtn} className="btn">Join Today</button>
      {btn ? <Popup handleCancleBtn={handleCancleBtn} /> : null}
    </div>

  );
}

export default HeroSection;
