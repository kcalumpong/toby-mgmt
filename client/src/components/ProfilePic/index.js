import React from "react";
import "./style.css";

const Image = ({ image }) => {
    return (
        <div className="file-item">
            <a href={image.src}>
                <img alt={`image - ${image.id}`} src="../images/docImg.jpg" className="file-img" />
            </a>
            <p>{image.name}</p>
        </div>
    );
}

const ProfilePic = ({ images }) => {
    const renderImage = (image, index) => {
        return (
            <Image
                image={image}
                key={`${image.id}-doc`}
            />
        );
    }
    return <section className="file-list">{images.map(renderImage)}</section>;
}

export default ProfilePic;