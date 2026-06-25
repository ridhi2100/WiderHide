import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>WIDERHIDE</h1>
      <ul className="nav">
         <li>
          <Link to="/">Home</Link>
        </li>
         {/* <li> */}
          {/* <Link to="/Wallets">Wallets</Link>
        </li> */}
        <li>
          <Link to="/Belts">Belts</Link>
        </li>
{/* 
        <li>
          <Link to="/women">Women</Link>
        </li>

        <li>
          <Link to="/kids">Kids</Link>
        </li>

        <li>
          <Link to="/collections">
            Collections
          </Link>
        </li> */}

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;