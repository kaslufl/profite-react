import { Carousel as C } from "react-bootstrap";
import "./styles.css";

export default function Carousel() {
  return (
    <C>
      <C.Item>
        <img
          className="d-block w-100 slide"
          src="https://www.solidbackgrounds.com/images/800x600/800x600-gray-solid-color-background.jpg"
          alt="First slide"
        />
        <C.Caption>
          <h3>Nossa especialidade:</h3>
          <p>experiência de compra.</p>
        </C.Caption>
      </C.Item>
      <C.Item>
        <img
          className="d-block w-100 slide"
          src="https://www.solidbackgrounds.com/images/800x600/800x600-tomato-solid-color-background.jpg"
          alt="Second slide"
        />

        <C.Caption>
          <h3>Nossa especialidade:</h3>
          <p>experiência de compra.</p>
        </C.Caption>
      </C.Item>
    </C>
  );
}
