import React from "react";

import image from "../images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg";

import logoUPV2 from "../images/logo_UPV.jpg";
import logoTUBerlin from "../images/logo_TU_BERLIN.png";

const educationList = [
  {
    title: "Polythecnic University of Valencia",
    description: "Computer Science Engineering",
    date: "2018-2024",
    image: logoUPV2,
    url: "https://www.upv.es/titulaciones/GII/",
  },
  {
    title: "Polythecnic University of Valencia",
    description: "Diploma in Artificial Intelligence (Samsung Innovation Campus)",
    date: "2024-2024",
    image: logoUPV2,
    url: "https://www.cfp.upv.es/formacion-permanente/curso/diploma-extension-universitaria-inteligencia-artificial-samsung-innovation-campus_97568.html",
  },
  {
    title: "Technische Universität Berlin",
    description: "Ethics and epistemology of artificial intelligence",
    date: "2024-2024",
    image: logoTUBerlin,
    url: "https://www.tu.berlin/en/philtech/study-and-teaching/ethics-and-epistemology-of-ai",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div id="education" style={{ alignItems: "flex-start" }}>
        <img
          src={image}
          style={{
            height: "80%",
            width: "100%",
            objectFit: "cover",
          }}
          alt={"Education"}
        />

        <div
          className="container"
          style={{ display: "flex", flexDirection: "row", padding: "10px" }}
        >
          {educationList.map((education) => (
            <a href={education.url} target="_blank" rel="noopener noreferrer" key={education.title}>
              <div className="box" style={{}}>
                <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
                <img
                  src={education.image}
                  alt={education.title}
                  style={{ maxWidth: "70px", maxHeight: "50px", margin: "0 auto" }}
                ></img>

                <p className="small">{education.date}</p>
                <p className="small">{education.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
