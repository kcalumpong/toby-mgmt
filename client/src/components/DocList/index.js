import React from "react";

const Doc = ({ doc }) => {
    return (
        <div className="file-item">
            <img alt={`doc - ${doc.id}`} src={doc.src} className="file-img" />
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