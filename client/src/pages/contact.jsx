import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";

function Contact() {
  const whatsappLink =
    "https://wa.me/919050538588?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20products.";

  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-box">

          <h1>Contact Us</h1>

          <p>
            Have questions about our products?
            Connect with us directly on WhatsApp for quick assistance.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

          <div className="contact-details">
            <h3>Business Contact</h3>
            <p>📞 +91 9911056588</p>
            <p>📧 widerhide@gmail.com</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;