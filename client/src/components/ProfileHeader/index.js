import React from "react";
import cuid from "cuid";
import Dropzone from "../Dropzone";
import ProfilePic from "../ProfilePic";
import API from "../../utils/API";
import "./style.css";

function ProfileHeader(props) {

  const onDrop = acceptedFiles => {

    API.uploadFile(acceptedFiles).then(r => {
      // props.updateImages({ id: cuid(), src: r.url.slice(0, -266), name: acceptedFiles[0].name }, API.saveDocument({ src: r.url.slice(0, -266), name: acceptedFiles[0].name }));
      props.updateImages({ id: cuid(), src: r.url.slice(0, -266), name: acceptedFiles[0].name }, props.updateProfilePic({ profilePic: r.url.slice(0, -266) }), API.saveDocument({ src: r.url.slice(0, -266), name: acceptedFiles[0].name }));
    }).catch(err => console.error(err))
    
  };

  return (
    <main className="profile-header">
      {props.images === null ?
        <Dropzone onDrop={onDrop} accept={"image/*"} /> :
        <ProfilePic images={props.images} />
      }
    </main>
  );
}

export default ProfileHeader;