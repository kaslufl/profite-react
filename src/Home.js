import { Component } from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carousel />
        <ProductCard />
      </article>
    );
  }
}
