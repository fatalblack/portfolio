import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { getImageSize } from 'react-image-size';
import { Button } from 'react-bootstrap'

const DesignGallery = (props) => {
    const [index, setIndex] = useState(-1);
    const [images, setImages] = useState([]);
    var indexImages = 1;
    const handleClick = (index) => setIndex(index);

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

            /*if(indexImages % 2 === 1){
                setImages(current => [...current, newImage]);
            }*/
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

    return (
        <div className="body-background designs-gallery">
            <div className="desings-gallery-title">
                {props.galleryName}
                <Button variant="link" className="navbar-brand desings-gallery-back" onClick={props.callback}>Volver</Button>
            </div>
            <Gallery images={images} onClick={handleClick}/>
            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Captions]}
            />
        </div>
    )
}

export default DesignGallery