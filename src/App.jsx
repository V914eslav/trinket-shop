import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop/Shop";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <Header />

      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
