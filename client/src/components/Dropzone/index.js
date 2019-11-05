import React from "react";
import "./style.css";
import { useDropzone } from "react-dropzone";
     
        const Dropzone = ({ onDrop, accept }) => {
          const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
            accept
          });
        
          return (
            <div {...getRootProps()}>
              <input className="dropzone-input" {...getInputProps()} />
              <div className="text-center">
                {isDragActive ? (
                  <p className="dropzone-content">Add New Files</p>
                ) : (
                  <p className="dropzone-content">
                    Drag and Drop
                  </p>
                )}
              </div>
            </div>
    )
}

export default Dropzone;