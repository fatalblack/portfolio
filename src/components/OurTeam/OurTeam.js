import { Row, Col, Badge } from 'react-bootstrap'

const OurTeam = () => {
    return(
        <div className="general-box">
            <div className="link-marker" id="OurTeam"></div>
            <Row>
                <Col xs="0" sm="1"></Col>
                <Col xs="12" sm="10">
                    <div className="general-title">Nuestro equipo</div>
                </Col>
                <Col xs="0" sm="1"></Col>
            </Row>
            <Row>
                <Col xs="0" sm="1"></Col>
                <Col xs="12" sm="10">
                    <Col xs="12" sm="6" md="4">
                        <div className="light-animated-background ourteam-frame">
                            <div className="ourteam-member-name">Luis Aguirre</div>
                            <div className="ourteam-member-photo">
                                <img src="images/members/luis-aguirre.jpg" alt="Luis Aguirre" />
                            </div>
                            <div className="ourteam-member-techs-list">
                                <Badge bg="light" className="ourteam-member-tech-badge">Desarrollo Web</Badge>
                                <Badge bg="light" className="ourteam-member-tech-badge">Maquetado</Badge>
                                <Badge bg="light" className="ourteam-member-tech-badge">Diseño</Badge>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col xs="0" sm="1"></Col>
            </Row>
            <div className="general-big-space">
                
            </div>
        </div>
    );
}

export default OurTeam