import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout"

import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Products } from "./Pages/Products";
import { Offers } from "./Pages/Offers";
import { Cart } from "./Pages/Cart";
import { Contact } from "./Pages/Contact";
import { Winter } from './Pages/Winter';
import { Summer } from './Pages/Summer';
import { Bikinis } from './Pages/Bikinis';
import { Deportiva } from './Pages/Deportiva';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />}>
            <Route path="winter" element={<Winter />} />
            <Route path="summer" element={<Summer />} />
            <Route path="bikinis" element={<Bikinis />} />
            <Route path="deportiva" element={<Deportiva />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
