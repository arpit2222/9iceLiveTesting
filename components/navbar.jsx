import Link from 'next/link';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {AiFillInstagram} from 'react-icons/ai'

function OffcanvasExample() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);
  return (
    <>
        {/* <Navbar fixed="top" bg="secondary" variant='dark' expand="sm" style={{padding:"10px 50px"}} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
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
                    <NavDropdown.Item onClick={handleClose}  href="#cigarillos">
                        Cigarillos
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleClose} href="#rolling_paper">
                      Rolling Paper
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleClose} href="#cones">
                      Cones
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={handleClose} href="#contact_us">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}

        <Navbar bg="dark" variant='dark' fixed="top">
        <Container className='flex justify-start text-white font-semibold'>
            <div className='flex'>
            <Link href="https://9ice.in">
            <img
              alt=""
              src="/logo9ice.jpeg"
              width="60"
              height="60"
              className="rounded-full"
            />
            </Link>
            </div>

            <div>
              <Link href="https://instagram.com/9ice.in?igshid=MTIzZWQxMDU=" target="_blank">
                <img
              alt=""
              src="/background/insta.png"
              width="30"
              height="30"
              className="border-[1px] border-white rounded-lg bg-white cursor-pointer"
            />
            </Link>
            </div>

        </Container>
      </Navbar>

    </>
  );
}

export default OffcanvasExample;