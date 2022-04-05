import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Cards/Cards";
import Favthings from "./components/FavThings/FavThings";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/NavUI";
import Top from "./components/Top/Top";
import "./index.css";

export function App() {
  return (
    <React.StrictMode>
      <Nav />
      <Top />
      <Card />
      <Favthings />
      <Footer />
    </React.StrictMode>
    // document.getElementById("root")
  );
}
export default App;
