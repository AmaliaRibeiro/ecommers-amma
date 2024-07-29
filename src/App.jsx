import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout"

import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Products } from "./Pages/Products";
import { Offers } from "./Pages/Offers";
import { Cart } from "./Pages/Cart";
import { Contact } from "./Pages/Contact";


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
