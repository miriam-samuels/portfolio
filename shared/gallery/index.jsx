import { useState } from 'react';
import './index.scss';
import Modal from '../modal';

const ImageGallery = ({
    images = [],
    site =[],
    direction = 'horizontal',
    thumbnailSize = 'large',
    gap = 'normal',
    backgroundColor = 'transparent',
    borderRadius = 'medium'
}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to determine if URL is absolute or relative
    const isAbsoluteUrl = (url) => {
        return /^https?:\/\/|^\/\/|^data:/.test(url);
    };

    // Function to resolve image URL
    const resolveImageUrl = (src) => {
        if (isAbsoluteUrl(src)) {
            return src;
        }
        // For relative URLs, just use the src directly in this example
        return src;
    };

    const isWebsiteUrl = (url) => {
        if (!isAbsoluteUrl(url)) return false;

        // Common image extensions check - simplistic but works for basic use cases
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
        return !imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };


    // Create class names based on props
    const galleryClassName = `image-gallery ${direction} gap-${gap}`;
    const thumbnailClassName = `thumbnail size-${thumbnailSize} radius-${borderRadius}`;

    return (
        <div className="image-gallery-component">
            {/* Gallery Container */}

            <div
                className={galleryClassName}
                style={{ backgroundColor }}
            >
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={thumbnailClassName}
                        onClick={() => {
                            if ((isWebsiteUrl(item) || site.length)) {
                                window.open(site?.[index] ?? '', "_blank")
                            } else {
                                setSelectedImage(item)
                            }
                        }}
                    >
                        {(isWebsiteUrl(item) || site.length) ? (
                            <>
                                <div className="website-preview-overlay">
                                    🌐 Visit site
                                    {/* <span>{new URL(item).hostname}</span> */}
                                </div>
                                <img
                                    src={item}
                                    alt={`Image ${index + 1}`}
                                />
                                {/* <iframe
                                    src={item}
                                    title={`Website preview ${index + 1}`}
                                    loading="lazy"
                                    className="website-frame"
                                /> */}
                            </>
                        ) : (
                            <img
                                src={resolveImageUrl(item)}
                                alt={`Image ${index + 1}`}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal size="md" show={Boolean(selectedImage)} hide={()=> setSelectedImage(null)}>
            <img
                            src={resolveImageUrl(selectedImage)}
                            alt="Enlarged view"
                        />
            </Modal>
         
        </div>
    );
};


export default ImageGallery;