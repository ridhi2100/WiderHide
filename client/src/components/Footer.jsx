import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-column">
          <h3>CONNECT WITH US</h3>

          <div className="socials">

            <a
              href="https://www.instagram.com/widerhide?igsh=YmNyM2tqOG9keWt1"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            {/* <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a> */}

          </div>
        </div>

      </div>

      <div className="company-info">

        <h3>ONLINE SHOPPING MADE EASY AT WIDERHIDE</h3>

        <p>
          WiderHide is your destination for premium fashion
          accessories and handcrafted leather products.
          Discover timeless collections for Men, Women and Kids.
        </p>

        <h3>REGISTERED OFFICE</h3>

        <p>
          WiderHide
          <br />
          Haryana, India
          <br />
          widerhide@gmail.com
          <br />
          +91 9911056588
        </p>

      </div>

      <div className="copyright">
        © 2026 WiderHide. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;