import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { belts } from "../data/beltData";
import "./belt.css";

function Belts() {

  const [selectedImage, setSelectedImage] = useState({});

  return (
    <>
      <Navbar />

      <div className="belts-page">

        <h1>Our Belt Collection</h1>

        {belts.map((belt) => {

          const currentImage =
            selectedImage[belt.id] || belt.images[0];

          return (
            <div
              className="product-box"
              key={belt.id}
            >

              <div className="left-side">

                <img
                  src={currentImage}
                  alt=""
                  className="main-img"
                />

                <div className="thumb-row">

                  {belt.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="thumb"
                      onClick={() =>
                        setSelectedImage({
                          ...selectedImage,
                          [belt.id]: img,
                        })
                      }
                    />
                  ))}

                </div>

              </div>

              <div className="right-side">

                <h2>{belt.name}</h2>

                <h3>{belt.price}</h3>

                <p>{belt.description}</p>

                <ul>
                  <li>✔ Genuine Leather</li>
                  <li>✔ Premium Metal Buckle</li>
                  <li>✔ Durable Stitching</li>
                  <li>✔ Formal & Casual Wear</li>
                </ul>

                <a
                  href={`https://wa.me/919911056588?text=Hi,%20I%20want%20to%20order%20${belt.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Buy Now
                  </button>
                </a>

              </div>

            </div>
          );
        })}

      </div>

      <Footer />
    </>
  );
}

export default Belts;