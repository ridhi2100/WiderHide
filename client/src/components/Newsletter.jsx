function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Stay Updated</h2>

      <p>
        Get latest arrivals and offers.
      </p>

      <div className="newsletter-box">

        <input
          type="email"
          placeholder="Enter Email"
        />

        <button>Subscribe</button>

      </div>

    </section>
  );
}

export default Newsletter;