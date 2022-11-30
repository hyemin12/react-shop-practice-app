import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="inner">
          <CardList />
          <Cart />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
