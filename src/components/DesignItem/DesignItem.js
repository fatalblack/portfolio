import { useState } from 'react'
import { Button } from 'react-bootstrap'
import DesignGallery from '../DesignGallery/DesignGallery'

const DesignItem = (props) => {
    const [showGallery, setShowGallery] = useState(false);

    const handleCloseGallery = () => {
        setShowGallery(false);
        window.scrollTo(0, 0);
    }
    const handleShowGallery = () => {
        setShowGallery(true);
        window.scrollTo(0, 0);
    }

    return(
        <>
        {showGallery !== true ? (
            <div className="designs-item-container" style={{backgroundImage:`url(${props.thumbUrl})`}}>
                <div className="designs-item-data-container">
                    <div className="designs-item-data">
                        <div className="designs-item-title">{props.title}</div>
                        <div className="designs-item-description">{props.description}</div>
                        <div className="designs-item-navbar">
                            <Button variant="dark" size="sm" onClick={handleShowGallery} className="designs-item-nav">
                                Ver galería
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <DesignGallery gallery={props.gallery} galleryName={props.galleryName} callback={handleCloseGallery}></DesignGallery>
        )}
        </>
    )
}

export default DesignItem