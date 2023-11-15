import { Row, Col } from 'react-bootstrap'
import DesignItem from '../DesignItem/DesignItem'

const DesignList = () => {
    const galleryMaggie = [
        {title:"Logo", url: "/images/designs/maggie/logo1.png" },
        {title:"Imagen de perfil", url: "/images/designs/maggie/perfil1.jpg" },
        {title:"Imagen de perfil variación", url: "/images/designs/maggie/perfil2.png" },
        {title:"Imagen de portada 1", url: "/images/designs/maggie/portada1.jpg" },
        {title:"Imagen de portada 2", url: "/images/designs/maggie/portada2.jpg" },
        {title:"Imagen de portada 3", url: "/images/designs/maggie/portada3.jpg" },
        {title:"Imagen de portada 4", url: "/images/designs/maggie/portada4.jpg" },
        {title:"Imagen de portada 5", url: "/images/designs/maggie/portada5.jpg" },
        {title:"Imagen de portada 6", url: "/images/designs/maggie/portada6.jpg" },
        {title:"Tarjetas para imprimir", url: "/images/designs/maggie/tarjetas1.jpg" },
    ];

    const galleryTerra = [
        {title:"Logo", url: "/images/designs/terra/terra-logo.png" },
        {title:"Banner", url: "/images/designs/terra/terra-banner.png" },
        {title:"Listado de variedades para un producto", url: "/images/designs/terra/hamburguesas.png" }
    ];

    const galleryGyE = [
        {title:"Flyer - Búsquedas ejecutivas", url: "/images/designs/gye/BusquedasEjecutivas.jpg" },
        {title:"Flyer - Búsquedas ejecutivas - variante", url: "/images/designs/gye/BusquedasEjecutivas2.jpg" },
        {title:"Flyer - Capital humano", url: "/images/designs/gye/CapitalHumano.jpg" },
        {title:"Flyer - Capital humano - variante", url: "/images/designs/gye/CapitalHumano2.jpg" },
        {title:"Flyer - Liderazgo", url: "/images/designs/gye/Liderazgo.jpg" },
        {title:"Flyer - Liderazgo - variante", url: "/images/designs/gye/Liderazgo2.jpg" },
        {title:"Flyer - Millennials", url: "/images/designs/gye/Millennials.jpg" },
        {title:"Flyer - Millennials - variante", url: "/images/designs/gye/Millennials2.jpg" },
        {title:"Flyer - Organizacion", url: "/images/designs/gye/Organizacion.jpg" },
        {title:"Flyer - Organizacion - variante", url: "/images/designs/gye/Organizacion2.jpg" }
    ];

    return (<>
        <Row className="no-margin min-site-size">
            <Col xs="12" sm="6" md="4" lg="3" className="no-padding">
                <DesignItem
                    thumbUrl="/images/designs/design-maggie-small.jpg"
                    gallery={galleryMaggie}
                    galleryName="Maggie Asian Shop"
                    title="Maggie Asian Shop"
                    description="Diseño de marca, portada y productos para una tienda de productos asiáticos."></DesignItem>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" className="no-padding">
                <DesignItem
                    thumbUrl="/images/designs/design-terra-small.jpg"
                    gallery={galleryTerra}
                    galleryName="Terra, comida vegetariana y vegana"
                    title="Terra"
                    description="Diseño de marca, banner y menúes para un local de venta de comidas vegetarianas y veganas."></DesignItem>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3" className="no-padding">
                <DesignItem
                    thumbUrl="/images/designs/design-gye-small.jpg"
                    gallery={galleryGyE}
                    galleryName="Gente y Empresas"
                    title="Gente y Empresas"
                    description="Diseño de flyers, para una red de consultores expertos en gestión de capital humano."></DesignItem>
            </Col>
        </Row>
    </>)
}

export default DesignList