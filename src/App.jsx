import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <Navbar />
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App;
