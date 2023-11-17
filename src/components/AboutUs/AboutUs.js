import { Row, Col } from 'react-bootstrap'

const AboutUs = () => {
    return(
        <div className="general-box">
            <div className="link-marker" id="AboutUs"></div>
            <Row>
                <Col xs="0" sm="1"></Col>
                <Col xs="12" sm="10">
                    <div className="general-title">Quiénes somos</div>
                    <div className="general-description">
                        <span className="general-brand-name">Pandora CodeBox</span> es una empresa de desarrollo web formada en 2013.
                    </div>
                    <div className="general-description">Orientada mayormente en ofrecer soluciones a pequeñas empresas y emprendedores que quieren expandir sus negocios a través de internet.</div>
                </Col>
                <Col xs="0" sm="1"></Col>
            </Row>
        </div>
    );
}

export default AboutUs