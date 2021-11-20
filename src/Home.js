import { Component } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDisplay from "./components/ProductDisplay";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carousel />
        <ProductDisplay />
        <Footer />
      </article>
    );
  }
}
