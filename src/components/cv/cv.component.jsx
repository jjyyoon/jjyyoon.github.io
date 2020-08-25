import React from "react";
import cv from "../../assets/Jiyeon_Yoon_CV.pdf";

const CV = () => (
  <object data={cv} width="100%" height="100%">
    <embed type="application/pdf" src={cv} width="100%" height="100%" />
    <p>
      Your browser does not support PDFs.
      <a
        href="https://drive.google.com/file/d/1UCpPpO05bV4bbRYgBYQFkaXtUKn9O8gl/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to view it.
      </a>
    </p>
  </object>
);

export default CV;
