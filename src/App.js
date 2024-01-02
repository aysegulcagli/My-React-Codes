import logo from './logo.svg';
import './App.css';
import List from './List';
import Slider from './Slider';
import Wordle from './Wordle';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/list">List</Nav.Link>
                <Nav.Link as={Link} to="/slider">First Component</Nav.Link>
                <Nav.Link as={Link} to="/slider">Slider</Nav.Link>
                <Nav.Link as={Link} to="/wordle">WORDLE</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path='home' element={<Home />}></Route>
            <Route path='list' element={<List name='Ali' dep='CSE' gpa='3.4' btntxt='Clik!'></List>}></Route>
            <Route path='slider' element={<Slider />}></Route>
            <Route path='wordle' element={<Wordle />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <span class="material-symbols-outlined">
        favorite
      </span>

    </div>


  );
}

const Home = () => (
  <div>
    Home page
  </div>
);

export default App;
