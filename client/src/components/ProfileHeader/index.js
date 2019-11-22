import React, { useCallback } from "react";
import cuid from "cuid";
import Dropzone from "../Dropzone";
import ProfilePic from "../ProfilePic";
import API from "../../utils/API";
import "./style.css";

function ProfileHeader(props) {

  const onDrop = useCallback(acceptedFiles => {

    console.log(acceptedFiles);

    API.uploadFile(acceptedFiles).then(r => {
      props.updateImages({ id: cuid(), src: r.url, name: acceptedFiles[0].name });
    }).catch(err => console.error(err))

    // acceptedFiles.map(file => {
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    //     setDocs(prevState => [
    //       ...prevState,
    //       { id: cuid(), src: e.target.result, name: file.name }
    //     ]);
    //   }
    //   reader.readAsDataURL(file);
    //   console.log(file);
    //   return file;
    // });
  }, []);

  return (
    <main className="profile-header">
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ProfilePic images={props.images} />
      {/* <img className="profile-pic" alt="profile-pic" src="../images/kristina.jpeg"></img> */}
    </main>
  );
}

export default ProfileHeader;