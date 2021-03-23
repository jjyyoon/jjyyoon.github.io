import React from "react";
import { useParams } from "react-router-dom";

import cv from "../../assets/Jiyeon_Yoon_CV.pdf";
import cvKor from "../../assets/Jiyeon_Yoon_CV_Kor.pdf";

const cvList = {
  eng: {
    cv,
    href: "https://drive.google.com/file/d/1ODmCPZO75B3hfBuVFRZ1pT81A-B9ZAyG/view?usp=sharing"
  },
  kor: {
    cv: cvKor,
    href: "https://drive.google.com/file/d/190nGR6ciVxZ1-3un__F_2M505p8Hk2TD/view?usp=sharing"
  }
};

const CV = () => {
  const { language } = useParams();

  if (!cvList[language]) {
    return null;
  }

  const { cv, href } = cvList[language];

  return (
    <object data={cv} width="100%" height="100%">
      <embed type="application/pdf" src={cv} width="100%" height="100%" />
      <p style={{ textAlign: "center" }}>
        Your browser does not support PDFs.
        <br />
        <a href={href} target="_blank" rel="noopener noreferrer">
          Click here to view it.
        </a>
      </p>
    </object>
  );
};

export default CV;
