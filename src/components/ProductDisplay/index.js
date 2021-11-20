import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard";
import "./styles.css";

export default class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  onLoadFailure(error) {
    console.log(error);
  }

  componentDidMount() {
    fetch("http://localhost:8090/product")
      .then((response) => response.json(), this.onLoadFailure)
      .then((json) => this.setState({ productList: json }), this.onLoadFailure);
  }

  render() {
    return (
      <Container>
        <h4>Produtos</h4>
        <Row xs={1} md={4} className="g-4">
          {this.state.productList.map(function (product) {
            return (
              <Col>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
