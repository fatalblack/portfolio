import { Row, Col } from 'react-bootstrap'

const ContactUs = () => {
    return(
        <div className="min-site-size">
            <Row>
                <Col xs="0" sm="1" md="2"></Col>
                <Col xs="12" sm="10" md="8">
                    <div className="contact-title">Contacto</div>
                    <div className="contact-box">
                        <div className="contact-subtitle">Email</div>
                        <div><a href="mailto:contacto@pandoracodebox.com">contacto@pandoracodebox.com</a></div>
                    </div>
                </Col>
                <Col xs="0" sm="1" md="2"></Col>
            </Row>
        </div>
    );
}

export default ContactUs