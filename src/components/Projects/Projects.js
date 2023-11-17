import { Row, Col } from 'react-bootstrap'
import WebList from '../WebList/WebList'
import DesignList from '../DesignList/DesignList'

const Projects = () => {
    return(
        <>
            <div className="link-marker" id="Projects"></div>
            <div className="general-big-header" style={{backgroundImage: "url('images/pattern-white.svg')"}}>
                Proyectos web
            </div>
            <div className="general-box-alter">
                <Row>
                    <Col xs="0" sm="1"></Col>
                    <Col xs="12" sm="10" className="projects-list">
                        <WebList />
                    </Col>
                    <Col xs="0" sm="1"></Col>
                </Row>
            </div>
            <div className="general-big-space-alter">
                
            </div>
            <div className="general-big-header-orange-light no-margin-top" style={{backgroundImage: "url('images/pattern-white.svg')"}}>
                Proyectos de diseño
            </div>
            <div className="general-box-alter">
                <Row>
                    <Col xs="0" sm="1"></Col>
                    <Col xs="12" sm="10" className="projects-list">
                        <DesignList />
                    </Col>
                    <Col xs="0" sm="1"></Col>
                </Row>
            </div>
            <div className="general-big-space-alter">
                
            </div>
        </>
        
    );
}

export default Projects