/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ticket App (Developing)",
    description:
      "Creating a Next.js and Mongoose web app with Tailwind CSS for managing diverse IT incidents. By integrating Tailwind CSS for streamlined UI development alongside Next.js and Mongoose, our project ensures efficient incident tracking and resolution.",
    url: "https://github.com/socrallacer/ticket-app",
  },
  {
    title: "Personal Web Development (This One))",
    description:
      "Building my personal website using tools from GitHub Global Campus and React. Leveraging GitHub Global Campus resources and React for an interactive and professional web presence.",
    url: "https://github.com/socrallacer/sllweb",
  },
  {
    title: "Data Mining Project With Titanic Dataset (Kaggle)",
    description:
      "Conducting data mining on the Titanic dataset from Kaggle using RapidMiner. Employing RapidMiner's powerful analytics capabilities to extract insights and patterns from the Titanic dataset for predictive modeling.",
    url: "https://github.com/socrallacer/titanic",
  },
  {
    title: "Network system tecnlogies course",
    description:
      "Compendium of notes and lab projects for the course 'Network Systems Technologies,' covering Node.js, Docker, and MongoDB. This collection explores modern network technologies, emphasizing practical applications in web development and containerized environments.",
    url: "https://github.com/socrallacer/TSR",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "slideInLeftAnimation 1s ease-in-out forwards",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.title}>
              <div
                className="box"
                style={{
                  padding: "25px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "325px",
                }}
              >
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <p className="small">{project.description}</p>
                <div style={{ flexGrow: 1 }}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
