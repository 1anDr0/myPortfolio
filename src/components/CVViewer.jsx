import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CVViewer = () => {
  return (
    <div className="w-full h-[800px] mt-10">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="/CV-Jerker_Danielsson.pdf" />
      </Worker>
    </div>
  );
};

export default CVViewer;
