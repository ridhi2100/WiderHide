import { useParams } from "react-router-dom";
import { useState } from "react";
import belts from "../pages/beltDetails.jsx";

function BeltDetails() {

  const { id } = useParams();

  const belt =
    belts.find(
      item => item.id === Number(id)
    );

  const [mainImage, setMainImage] =
    useState(belt.images[0]);

  return (

    <div className="product-page">

      <div>

        <img
          src={mainImage}
          className="main-image"
          alt=""
        />

        <div className="thumbs">

          {belt.images.map((img, index) => (

            <img
              key={index}
              src={img}
              alt=""
              onClick={() =>
                setMainImage(img)
              }
            />

          ))}

        </div>

      </div>

      <div className="product-info">

        <h1>{belt.name}</h1>

        <h2>{belt.price}</h2>

        <p>{belt.description}</p>

        <a
          href={`https://wa.me/9050538588?text=Hi I want to order ${belt.name}`}
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
}

export default BeltDetails;