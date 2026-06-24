import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay">

        <h1>
          WIDERHIDE
          <br />
          Luxury Collection
        </h1>

        <p>
          Premium fashion accessories
          crafted for Men, Women and Kids.
        </p>

       <Link to="/Belts">
  <button>
    Shop Now
  </button>
</Link>

      </div>
    </section>
  );
}

export default HeroSection;