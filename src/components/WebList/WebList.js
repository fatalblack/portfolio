import { Row, Col } from 'react-bootstrap'
import WebItem from '../WebItem/WebItem'

const WebList = () => {
    const webItems = [
        {
            thumbUrl: "/images/webs/web-lacasa-small.jpg",
            targetUrl: "http://pandoracodebox.com/portfolio/webs/lacasa/login.php",
            title: "LA CASA",
            description: "Diseño, maquetado y funcionalidad php de sitio web de gestión de pacientes de psicólogos",
            techs: ["PHP","mySQL","HTML5","CSS3","Javascript"],
        },{
            thumbUrl: "/images/webs/web-startn-small.jpg",
            targetUrl: "http://pandoracodebox.com/portfolio/webs/startn/2.html",
            title: "STARTN",
            description: "Diseño, maquetado y funcionalidad php de sitio web de verificación y estado de conexiones a servidores",
            techs: ["PHP","HTML5","CSS3","Javascript"]
        },{
            thumbUrl: "/images/webs/web-vale-small.jpg",
            targetUrl: "https://valeporenvases.com.ar/",
            title: "TARJETA VALE",
            description: "Desarrollo de Api para la aplicación de billetera virtual de envases de cerveza, trabajo en conjunto con Clarika",
            techs: ["NET core", "SQL Server"]
        },{
            thumbUrl: "/images/webs/web-ankatu-small.jpg",
            targetUrl: "http://pandoracodebox.com/portfolio/webs/fundacionankatu/",
            title: "FUNDACIÓN ANKATU",
            description: "Diseño, maquetado y funcionalidad JS de sitio web para empresa dedicada a la capacitación para contengencia humana",
            techs: ["HTML","CSS","Javascript","jQuery"]
        },{
            thumbUrl: "/images/webs/web-gye-small.jpg",
            targetUrl: "http://pandoracodebox.com/portfolio/webs/gye/",
            title: "GENTE Y EMPRESAS",
            description: "Diseño, maquetado y funcionalidad JS de sitio web para empresa dedicada a dar soluciones de capital humano",
            techs: ["HTML","CSS","Javascript"]
        }
    ];

    return (<>
        <Row className="no-margin min-site-size webs-list-container">
            {
                webItems.map((webItem, index) => {
                    return(
                        <Col xs="12" sm="6" md="4" lg="3" key={"projectweb" + index}>
                            <WebItem
                                thumbUrl={webItem.thumbUrl}
                                targetUrl={webItem.targetUrl}
                                title={webItem.title}
                                description={webItem.description}
                                techs={webItem.techs}></WebItem>
                        </Col>
                    );
                })
            }
        </Row>
    </>)
}

export default WebList