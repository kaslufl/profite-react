import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { ImSearch} from 'react-icons/im';
import { MdOutlineShoppingCart, MdFlag } from 'react-icons/md';

export default function Header() {
  return (
    <Navbar bg="white">
      <Container fluid>
        <Navbar.Brand>Profit e</Navbar.Brand>
        <Form className="d-flex col-md-5">
          <input type="Search" placeholder="O que está procurando?" className="form-control border-bottom border-0"/>
          <ImSearch/>
        </Form>
        <Nav className="d-flex">
            <Nav.Item><Nav.Link>Minha Conta</Nav.Link></Nav.Item>
            <Nav.Item><MdOutlineShoppingCart/></Nav.Item>
            <Nav.Item></Nav.Item>
            <Nav.Item><MdFlag/></Nav.Item>
            <Nav.Item><MdFlag/></Nav.Item>
            <Nav.Item><MdFlag/></Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
