import "../style/projects.css"
import artzScreenshot from "../img/artz-screenshot.png"
import junkzoneScreenshot from "../img/junkzone-screenshot.png"
import horuScreenshot from "../img/horu-screenshot.png"
import { FaExternalLinkAlt } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
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
  Typescript,
  Css,
} from "./common/icons"

function Projects() {
  let prjs = [
    {
      title: "Artz",
      img: artzScreenshot,
      website: "https://artz.netlify.com/",
      github: "artz",
      desc:
        "Artz allows users to create nice paintings using Canvas API and share them with the world.",
      tools: [
        <Postgres />,
        <Node />,
        <Graphql />,
        <Jwt />,
        <ReactIcon />,
        <Css />,
      ],
    },
    {
      title: "Junkzone",
      img: junkzoneScreenshot,
      website: "https://junkzone.netlify.com",
      github: "junkzone",
      desc: "An E-commerce website built with MERN stack.",
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
    {
      title: (
        <>
          Horu [still in progress]{" "}
          <AiFillSetting style={{ color: "#edda05" }}></AiFillSetting>
        </>
      ),
      img: horuScreenshot,
      website: "",
      github: "horu-api",
      desc:
        "Horu (who are you) is an app that allows you to know who visited your website by showing you informations about them such as geolocation. It can also provide you with some statistics via charts about the number of visits to your website.",
      tools: [
        <Postgres />,
        <Node />,
        <Express />,
        <ReactIcon />,
        <Typescript />,
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
      <button
        onClick={() => {
          window.open("https://github.com/maathi/")
        }}
      >
        Find more on github
      </button>
    </section>
  )
}

export default Projects
