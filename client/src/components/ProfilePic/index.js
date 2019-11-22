import React from "react";
import "./style.css";

const Doc = ({ doc }) => {
    return (
        <div className="file-item">
            <a href={doc.src}>
                <img alt={`doc - ${doc.id}`} src="../images/docImg.jpg" className="file-img" />
            </a>
            <p>{doc.name}</p>
        </div>
    );
}

const DocList = ({ docs }) => {
    const renderDoc = (doc, index) => {
        return (
            <Doc
                doc={doc}
                key={`${doc.id}-doc`}
            />
        );
    }
    return <section className="file-list">{docs.map(renderDoc)}</section>;
}

export default DocList;