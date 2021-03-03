import "../style/projects.css"
import artzScreenshot from "../img/artz-screenshot.png"
import junkzoneScreenshot from "../img/junkzone-screenshot.png"
import { FaExternalLinkAlt } from "react-icons/fa"

import { FiGithub } from "react-icons/fi"
import {
  Postgres,
  Node,
  Graphql,
  ReactIcon,
  Jwt,
  Mongodb,
  Redux,
  Express,
  Sass,
} from "./common/icons"

function Projects() {
  let prjs = [
    {
      title: "Artz",
      img: artzScreenshot,
      website: "https://artz.netlify.com/",
      github: "artz",
      desc:
        "Artz allows users to create nice paintings and share them with the world. The design is built using pure CSS.",
      tools: [<Postgres />, <Node />, <Graphql />, <Jwt />, <ReactIcon />],
    },
    {
      title: "Junkzone",
      img: junkzoneScreenshot,
      website: "https://junkzone.netlify.com",
      github: "junkzone",
      desc: "An E-commerce website built with with MERN stack.",
      tools: [
        <Mongodb />,
        <Node />,
        <Express />,
        <Jwt />,
        <ReactIcon />,
        <Redux />,
        <Sass />,
      ],
    },
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="prjs">
        {prjs.map((p) => (
          <div key={p.title} className="prj">
            {/* <div> */}
            <div id="wrapper">
              <img src={p.img} alt="Avatar"></img>
            </div>
            {/* </div> */}
            <div>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <ul className="tools">
                {p.tools?.map((t) => {
                  return t
                })}
              </ul>

              <ul className="links">
                <a
                  href={"https://github.com/maathi/" + p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>

                <a href={p.website} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button>Find more on github</button>
    </section>
  )
}

export default Projects
