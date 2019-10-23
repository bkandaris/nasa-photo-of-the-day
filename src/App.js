import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
