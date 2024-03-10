import React from "react";

import image from "../images/final.jpg";

const educationList = [
  {
    title: "Polythecnic University of Valencia",
    description: "Computer Science Engineering",
    date: "2018-2024",
    url: "https://www.upv.es/titulaciones/GII/",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <div id="education" style={{ alignItems: "flex-start" }}>
        <h2 style={{ textAlign: "center" }}>Education</h2>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "slideInLeftAnimation 1s ease-in-out forwards",
            }}
            alt={"Education"}
          />
        </div>
        <div className="container">
          {educationList.map((education) => (
            <a href={education.url} target="_blank" rel="noopener noreferrer" key={education.title}>
              <div className="box">
                <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
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
