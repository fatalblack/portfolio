import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="web-navbar">
                <Container fluid>
                    <a href="#Home" className="d-inline-block align-top web-logo-navbar me-5">
                        <img
                            alt=""
                            src="/images/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="web-brand-title">Pandora CodeBox</span>
                        <div className="web-owner-title">by Luis Fernando Aguirre</div>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" navbarScroll>
                            <Nav.Link href="#Home" className="navbar-brand">Inicio</Nav.Link>
                            <Nav.Link href="#AboutUs" className="navbar-brand">Quiénes somos</Nav.Link>
                            <Nav.Link href="#Projects" className="navbar-brand">Proyectos</Nav.Link>
                            <Nav.Link href="#OurTeam" className="navbar-brand">Nuestro equipo</Nav.Link>
                            <Nav.Link href="#ContactUs" className="navbar-brand">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="link-marker" id="Home"></div>
            <div className="web-navbar-banner" style={{backgroundImage: "url('/images/navbar-banner-black.jpg')"}}>
                <div className="web-navbar-banner-title">
                    Desarrollo y diseño web
                </div>
                <div className="web-navbar-banner-subtitle">
                    Expandiendo tus posibilidades
                </div>
            </div>
        </>
    )
}

export default NavBar