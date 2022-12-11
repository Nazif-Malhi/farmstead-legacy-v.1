import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "styled-components";
import {useState} from 'react';
import './NavbarHeader2.css';
// import { Logo } from '../../assets';



const NavbarContainer = styled.div`
    border-radius:none;
    .active{
    color:#209e2e  !important;
  }
  .nav-link:hover {
    color: var(--bs-nav-link-hover-color);
    color: #209e2e !important;
`;


function NavbarHeader2() {

//   const [stickyNavbar, setStickyNavbar] = useState(false);
//   const changeNavbar = () =>{
//      if(window.scrollY >= 100){
//        setStickyNavbar(true);
//      }
//      else{
//        setStickyNavbar(false);
//      }
//   };
//   window.addEventListener('scroll', changeNavbar);

  return (
    <NavbarContainer >
      {/* <Navbar  className={stickyNavbar ? 'navbar navbarSticky' : 'navbarFloat' } expand="lg"> */}
      <Navbar  className='navbar navbarSticky' expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              {/* FarmStead */}
              {/* <img src={Logo} /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                {/* <Nav.Link href="#pages">Pages</Nav.Link> */}
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <NavDropdown title="Pages" id="navbarScrollingDropdown"  >
                  <NavDropdown.Item href="pest-detection">Pest Detection</NavDropdown.Item>
                  <NavDropdown.Item href="#page2">Page 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#page3">Page 3</NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown title="Services" id="navbarScrollingDropdown"  >
                  <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#shop1">Shop 1</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#" disabled>
                  
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='searchBtn' variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </NavbarContainer> 
    
  );
}

export default NavbarHeader2;