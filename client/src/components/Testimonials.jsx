import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="slider">

        <div className="slide-track">

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Amazing leather quality and premium finish.
            </p>
            <h4>Rahul Sharma</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Beautiful handbag collection.
            </p>
            <h4>Priya Mehta</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Excellent customer service.
            </p>
            <h4>Ankit Gupta</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Outstanding craftsmanship and durability.
            </p>
            <h4>Neha Kapoor</h4>
          </div>

          {/* Duplicate cards for smooth infinite scroll */}

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Amazing leather quality and premium finish.
            </p>
            <h4>Rahul Sharma</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Beautiful handbag collection.
            </p>
            <h4>Priya Mehta</h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;