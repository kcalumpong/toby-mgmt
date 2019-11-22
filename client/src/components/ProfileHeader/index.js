import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "../Dropzone";
import ProfilePic from "../ProfilePic";
import API from "../../utils/API";
import "./style.css";

function ProfileHeader() {

  const [images, setDocs] = useState([]);

  const onDrop = useCallback(acceptedFiles => {

    console.log(acceptedFiles);

    API.uploadFile(acceptedFiles)

    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setDocs(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result, name: file.name }
        ]);
      }
      reader.readAsDataURL(file);
      console.log(file);
      return file;
    });
  }, []);

  return (
    <div className="profile-header">
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      {/* <ProfilePic images={images} /> */}
      {/* <img className="profile-pic" alt="profile-pic" src="../images/kristina.jpeg"></img> */}
    </div>
  );
}

export default ProfileHeader;