import "../style/projects.css"
import brba from "../img/brba.jpg"
import screenshot from "../img/screenshot.png"
import screenshot2 from "../img/screenshot2.png"
import { FaExternalLinkAlt } from "react-icons/fa"

import { FiGithub } from "react-icons/fi"
import { Postgres, Node, Graphql, ReactIcon, Api, Jwt } from "./common/icons"

function Projects() {
  let prjs = [
    {
      title: "Artist",
      img: screenshot,
      website: "https://a-r-t-i-s-t.herokuapp.com/",
      github: "artist",
      desc:
        "Artist allows users to create nice paintings and share them with the world. the app is fully responsive and the design is built using pure CSS.",
      tools: [<Postgres />, <Node />, <Graphql />, <Jwt />, <ReactIcon />],
    },
    {
      title: "Br Ba cast",
      img: screenshot2,
      website: "https://heisenberg-and-friends.herokuapp.com",
      github: "brba",
      desc:
        "A very simple React app with hooks for displaying cast members from the Breaking Bad Tv show, the app consumes api from breakingbadapi.com and displays the results.",
      tools: [<ReactIcon />, <Api />],
    },
  ]

  return (
    <section id="projects">
      <h2>Small projects i've been working on lately</h2>

      <div className="prjs">
        {prjs.map((p) => (
          <div key={p.title} className="prj">
            {/* <div> */}
            <div id="wrapper">
              <a href={p.website} target="_blank" rel="noreferrer">
                <img src={p.img} alt="Avatar"></img>
              </a>
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
    </section>
  )
}

export default Projects
