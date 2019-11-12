import React, { useCallback, useState } from "react";
import "./style.css";
import Dropzone from "../Dropzone";
import cuid from "cuid";
import { CloudDirectory } from "aws-sdk";


function Document() {
  
  const [docs, setDocs] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);

    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setDocs(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      }
      reader.readAsDataURL(file);
      console.log(file);
      return file;
    });
  }, []);

  return (
    <main className="drop-area">
      <h1 className="text-center">Employee Documents</h1>
      <Dropzone onDrop={onDrop} accept={"application/pdf, image/*"} />
    </main>
  );
}

export default Document;

