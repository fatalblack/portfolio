import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { getImageSize } from 'react-image-size';

const DesignItem = (props) => {
    const [index, setIndex] = useState(-1);
    const [images, setImages] = useState([]);
    const handleShowGallery = () => setIndex(0);
    var indexImages = 1;

    useEffect(() => {
        props.gallery.forEach(async (image) => {
            const dimensions = await fetchImageSize(image.url);
            const newImage = {
                src: image.url,
                title: image.title,
                width: dimensions.width,
                height: dimensions.height,
                alt: image.title,
                customOverlay: (
                    <div className="desings-gallery-custom-caption">
                    <div>{image.title}</div>
                    </div>
                )
            };
            
            setImages(current => [...current, newImage]);

            indexImages++;
        });
    }, [props.gallery, indexImages])

    async function fetchImageSize(imageUrl) {
        try {
            const dimensions = await getImageSize(imageUrl);
            return dimensions;
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
            <div className="designs-item-container" style={{backgroundImage:`url(${props.thumbUrl})`}}>
                <div className="designs-item-data-container">
                    <div className="designs-item-data">
                        <div className="designs-item-title">{props.title}</div>
                        <div className="designs-item-description">{props.description}</div>
                        <div className="designs-item-navbar">
                            <div onClick={handleShowGallery} className="designs-item-button-goto">
                                Ver galería
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Captions,Thumbnails]}
            />
        </>
    )
}

export default DesignItem