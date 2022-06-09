import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;