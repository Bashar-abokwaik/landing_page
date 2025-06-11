import heroImg from "../../assets/Bright Yellow and Black Photographic Fitness Service Website.png";
import "./HeroSection.css";
function HeroSection() { 
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
      
      <button className="btn">Join Today</button>
    </div>
  
  );
}

export default HeroSection;
