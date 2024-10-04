import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Uslovenne from "./pages/uslovenne/Uslovenne";
import Product from "./components/product/Product";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Uslovenne />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
