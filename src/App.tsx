import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="inner">
          <Card />
          <Cart />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
