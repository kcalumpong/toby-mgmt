import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "../Dropzone";
import API from "../../utils/API";
import "./style.css";

function ProfileHeader() {

    const [image, setDocs] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
      
      console.log(acceptedFiles);
  
      API.uploadFile(acceptedFiles)
  
      acceptedFiles.map(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
          setDocs(prevState => [
            ...prevState,
            { id: cuid(), src: e.target.result, name: file.name}
          ]);
        }
        reader.readAsDataURL(file);
        console.log(file);
        return file;
      });
    }, []);

    <div className="profile-header">
        <Dropzone onDrop={onDrop} accept={"images/*"} />
        <img className="profile-pic" alt="profile-pic" src="../images/kristina.jpeg"></img>
    </div>
}

export default ProfileHeader;