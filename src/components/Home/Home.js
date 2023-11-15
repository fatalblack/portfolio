import { Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div className="min-site-size">
            <Row>
                <Col xs="0" sm="1" md="2"></Col>
                <Col xs="12" sm="10" md="8">
                    <div className="home-title">¿Quiénes somos?</div>
                    <div className="home-box">
                        <div className="home-description"><span className="home-brand-name">Pandora CodeBox</span> es una empresa de desarrollo web formada en 2013.</div>
                        <div className="home-description">Orientada mayormente en ofrecer soluciones a pequeñas empresas y emprendedores que quieren expandir sus negocios a través de internet.</div>
                    </div>
                </Col>
                <Col xs="0" sm="1" md="2"></Col>
            </Row>
            <Row>
                <Col xs="0" sm="1" md="2"></Col>
                <Col xs="12" sm="10" md="8">
                    <div className="home-title">Nuestro Equipo</div>
                </Col>
                <Col xs="0" sm="1" md="2"></Col>
            </Row>
            <Row>
                <Col xs="0" sm="1" md="2"></Col>
                <Col xs="12" sm="5" md="4">
                    <div className="home-box">
                        <div className="home-member-name">Luis Aguirre</div>
                        <div className="home-member-photo">
                            <img src="images/members/luis-aguirre.jpg" alt="Luis Aguirre" />
                        </div>
                        <ul>
                            <li>Desarrollo Web</li>
                            <li>Maquetado</li>
                            <li>Diseño</li>
                        </ul>
                    </div>
                </Col>
                <Col xs="12" sm="5" md="4">
                    
                </Col>
                <Col xs="0" sm="1" md="2"></Col>
            </Row>
        </div>
    );
}

export default Home