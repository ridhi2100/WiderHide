import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { wallets } from "../data/walletData";

import "./wallet.css";

function Wallets() {

  const [selectedImage, setSelectedImage] = useState({});

  return (
    <>
      <Navbar />

      <div className="wallets-page">

        <h1>Our Wallet Collection</h1>

        {wallets.map((wallet) => {

          const currentImage =
            selectedImage[wallet.id] || wallet.images[0];

          return (

            <div
              className="product-box"
              key={wallet.id}
            >

              <div className="left-side">

                <img
                  src={currentImage}
                  alt=""
                  className="main-img"
                />

                <div className="thumb-row">

                  {wallet.images.map((img, index) => (

                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="thumb"
                      onClick={() =>
                        setSelectedImage({
                          ...selectedImage,
                          [wallet.id]: img,
                        })
                      }
                    />

                  ))}

                </div>

              </div>

              <div className="right-side">

                <h2>{wallet.name}</h2>

                <h3>{wallet.price}</h3>

                <p>{wallet.description}</p>

                <ul>
                  <li>✔ Genuine Leather</li>
                  <li>✔ Multiple Card Slots</li>
                  <li>✔ Premium Stitching</li>
                  <li>✔ Slim & Stylish Design</li>
                </ul>

                <a
                  href={`https://wa.me/919911056588?text=Hi,%20I%20want%20to%20order%20${wallet.name}`}
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

export default Wallets;