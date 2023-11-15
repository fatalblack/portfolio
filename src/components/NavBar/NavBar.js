import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar className="web-navbar">
            <Container>
                <NavLink to="/" className="d-inline-block align-top web-logo-navbar me-5">
                    <img
                        alt=""
                        src="/images/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="web-brand-title">Pandora CodeBox</span>
                    <div className="web-owner-title">by Luis Fernando Aguirre</div>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="navbar-brand">Inicio</NavLink>
                        <NavLink to="webs" className="navbar-brand">Webs</NavLink>
                        <NavLink to="designs" className="navbar-brand">Diseños</NavLink>
                        <NavLink to="contactus" className="navbar-brand">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar