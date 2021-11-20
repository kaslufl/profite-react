import { Component } from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carousel />
      </article>
    );
  }
}
