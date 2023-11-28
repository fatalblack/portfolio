import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import AlertDismissible from '../AlertDismissible/AlertDismissible';


const ContactUs = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [alertVariant, setAlertVariant] = useState("danger");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const alertCloseCallback = () => setAlertShow(false);
    const emailSenderToken = "yhyhtgkgjrkjgrkj48565hjhng9dgu9rgr9jg";
    const emailTo = "contacto@pandoracodebox.com";
    const emailSenderUrl = "https://pandoracodebox.com/MailSender/api/Mail";

    const showAlert = (isError, errorMessage) => {
        if(isError === true){
            setAlertVariant("danger");
            setAlertTitle("¡Ocurrió un error!");
            setAlertMessage(errorMessage);
        }else{
            setAlertVariant("success");
            setAlertTitle("¡Bien!");
            setAlertMessage("Se envió su consulta.");
        }

        setAlertShow(true);
    }

    const sendMail = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        
        setShowLoader(true);

        const form = event.currentTarget;
        const fullName = form.fullName.value;
        const companyName = form.companyName.value;
        const phone = form.phone.value;
        const mail = form.mail.value;
        var message = "";

        form.message.value.split("\n").map((item) => {
            message = message + item + "<br/>";
        });

        const mailRequest = {
            "token": emailSenderToken,
            "to": emailTo,
            "subject": "Consulta desde la web de Pandora CodeBox",
            "message": "Se realizó una nueva consulta.<br /><br /><strong>Nombre:</strong><br />"+fullName+"<br /><br /><strong>Compañia:</strong><br />"+companyName+"<br /><br /><strong>Teléfono:</strong><br />"+phone+"<br /><br /><strong>Email:</strong><br />"+mail+"<br /><br /><strong>Mensaje:</strong><br />"+message
        };

        fetch(emailSenderUrl, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailRequest)
        }).then(function (response) {
            if (response.ok) {
                return response.json().then(res => {
                    if(res.Succeeded === true){
                        showAlert(false, "");

                        form.fullName.value = "";
                        form.companyName.value = "";
                        form.phone.value = "";
                        form.mail.value = "";
                        form.message.value = "";
                    }else{
                        showAlert(true, "Error al intentar enviar el email: " + res.Message);
                    }
                });
            }else{
                showAlert(true, "Error al intentar enviar el email: " + response.statusText);
            }
        })
        .catch(function (error) {
            showAlert(true, "Error al intentar enviar el email: " + error);
        }).finally(() => {
            setShowLoader(false);
        });
    }

    return(
        <div>
            <div className="link-marker" id="ContactUs"></div>
            <div className="general-big-header-blue no-margin-top" style={{backgroundImage: "url('images/pattern-white.svg')"}}>
                Contáctenos
            </div>
            <div className="general-box">
                <Row>
                    <Col xs="0" sm="1"></Col>
                    <Col xs="12" sm="10">
                        <Form onSubmit={ sendMail } className="contact-form">
                            <Row>
                                <Col xs="12" md="6">
                                    <Form.Group controlId="fullName">
                                        <Form.Label className="contact-form-label">Nombre de contacto *</Form.Label>
                                        <Form.Control type="text" placeholder="" className="contact-form-input" required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" md="6">
                                    <Form.Group controlId="companyName">
                                        <Form.Label className="contact-form-label">Nombre de la compañia *</Form.Label>
                                        <Form.Control type="text" placeholder="" className="contact-form-input" required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" md="6">
                                    <Form.Group controlId="phone">
                                        <Form.Label className="contact-form-label">Teléfono *</Form.Label>
                                        <Form.Control type="text" placeholder="" className="contact-form-input" required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" md="6">
                                    <Form.Group controlId="mail">
                                        <Form.Label className="contact-form-label">Email *</Form.Label>
                                        <Form.Control type="mail" placeholder="" className="contact-form-input" required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12">
                                    <Form.Group controlId="message">
                                        <Form.Label className="contact-form-label">Mensaje *</Form.Label>
                                        <Form.Control as="textarea" rows={3} className="contact-form-input" required />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" className="text-right">
                                    <Button variant="dark" type="submit" className="contact-button-submit">Enviar</Button>
                                    <AlertDismissible show={alertShow} variant={alertVariant} title={alertTitle} message={alertMessage} closeCallback={alertCloseCallback} />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs="0" sm="1"></Col>
                </Row>
                <Loader show={showLoader} />
            </div>
        </div>
    );
}

export default ContactUs