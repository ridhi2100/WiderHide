import Navbar from "../components/Navbar";

function Collections() {
  return (
    <>
      <Navbar />

      <div className="collection-page">

        <h1>Our Collections</h1>

        <div className="collection-grid">

          <div className="collection-card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt=""
            />

            <h2>Men Collection</h2>

            <p>
              Premium wallets, belts,
              bags and jackets.
            </p>
          </div>

          <div className="collection-card">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt=""
            />

            <h2>Women Collection</h2>

            <p>
              Elegant handbags,
              wallets and accessories.
            </p>
          </div>

          <div className="collection-card">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
              alt=""
            />

            <h2>Kids Collection</h2>

            <p>
              Stylish and durable
              accessories for kids.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Collections;