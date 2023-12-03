import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export function NavBar(){
    
    // let header = document.querySelector("#navbar");
    // let lastScrollValue = 0;

    // document.addEventListener('scroll',() => {
    //         let top  = document.documentElement.scrollTop;
    //     if(lastScrollValue < top) {
    //         header.classList.add('hidden');
    //     } else {
    //         header.classList.remove('hidden');
    //     }
    //     lastScrollValue = top;
    // });
    return(
        <section id="navbar">
            <Navbar expand="lg" className="navbar fixed-top">
                <Container>
                    <Navbar.Brand ><h2>Medilab</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='scrollto active' href="#home">Home</Nav.Link>
                            <Nav.Link className='scrollto' href="#about">About</Nav.Link>
                            <Nav.Link className='scrollto' href="#services">Services</Nav.Link>
                            <Nav.Link className='scrollto' href="#departements">Departements</Nav.Link>
                            <Nav.Link className='scrollto' href="#doctors">Doctors</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='scrollto' href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <a href="#make" class="appointment-btn scrollto">Make an Appointment</a>
                </Container>
            </Navbar>
        </section>
    )
}