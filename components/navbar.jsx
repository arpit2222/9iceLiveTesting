import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
        <Navbar fixed="top" bg="secondary" variant='dark' expand="sm" style={{padding:"10px 50px"}}>
          <Container fluid>
            <Navbar.Brand href="#">9ICE</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  9ICE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="#action3">
                        Cigarillos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Tobacco
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Rolling Paper
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Cones
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1.5">About Us</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;