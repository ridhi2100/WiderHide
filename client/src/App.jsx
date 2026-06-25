import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Belts from "./pages/Belts";
import Wallets from "./pages/Wallets";
import Contact from "./pages/contact";
import BeltDetails from "./pages/beltDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/men"
          element={<Men />}
        />

        <Route
          path="/women"
          element={<Women />}
        />

      
        <Route
          path="/collections"
          element={<Collections />}
        />
        <Route
  path="/belts"
  element={<Belts />}
/>

<Route
  path="/wallets"
  element={<Wallets />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
<Route
 path="/belt/:id"
 element={<BeltDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;