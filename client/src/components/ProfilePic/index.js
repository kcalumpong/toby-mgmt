import React from "react";
import "./style.css";

const Image = ({ image }) => {
    return (
        <div className="file-item">
            <img alt={`image - ${image.id}`} src={image.src} className="file-img" />
        </div>
    );
}

const ProfilePic = ({ images }) => {
    const renderImage = (image, index) => {
        return (
            <Image
                image={image}
                key={`${image.id}-image`}
            />
        );
    }
    return <section className="file-list">{images.map(renderImage)}</section>;
}

export default ProfilePic;