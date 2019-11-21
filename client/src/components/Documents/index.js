import React, { useCallback, useState } from "react";
// import { CloudDirectory } from "aws-sdk";
import cuid from "cuid";
import "./style.css";
import Dropzone from "../Dropzone";
import DocList from "../DocList";
import API from "../../utils/API";
import Save from "../Save";

function Document() {

  const [docs, setDocs] = useState([]);

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

  return (
    <main className="drop-area">
      <legend>Employee Documents</legend>
      <Dropzone onDrop={onDrop} accept={"application/pdf"} />
      <DocList docs={docs} />
      <Save />
    </main>
  );
}

export default Document;