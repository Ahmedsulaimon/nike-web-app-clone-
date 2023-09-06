"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";
import Productpage from "./pages/productpage";
import ShoppingCart from "./components/cart/ShoppingCart";
import { ShoppingCartProvider } from "./hooks/useContext/shoppingCartContext";
import { SelectedSizeProvider } from "./hooks/useContext/sizes";
import { FetchDataProvider } from "./hooks/useContext/API/Api";

export default function App() {
  return (
    <main className="bg-white">
      <FetchDataProvider>
        <SelectedSizeProvider>
          <ShoppingCartProvider>
            <Router>
              {" "}
              <Navigation />
              <section className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/productpage" element={<Productpage />} />
                  <Route path="/ShoppingCart" element={<ShoppingCart />} />
                </Routes>
              </section>
              <Footer />
            </Router>
          </ShoppingCartProvider>
        </SelectedSizeProvider>
      </FetchDataProvider>
    </main>
  );
}
