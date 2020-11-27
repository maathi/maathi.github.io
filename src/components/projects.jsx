import "../style/projects.css"
import brba from "../img/brba.jpg"
import portfolio from "../img/portfolio.jpg"
import arch from "../img/configs.png"
import { FaGithub } from "react-icons/fa"

function Projects() {
  let prjs = [
    {
      title: "Br Ba cast",
      img: brba,
      website: "https://heisenberg-and-friends.herokuapp.com",
      github: "brba",
      desc: "a samll app using breakingbadapi & React",
    },
    {
      title: "My portfolio",
      img: portfolio,
      website: "#",
      github: "portfolio",
      desc: "this one :P",
    },
    {
      title: "My Archlinux dot files",
      img: arch,
      website: "https://www.github.com/maathi/cute-dots",
      github: "cute-dots",
      desc: "My archlinux configuration",
    },
  ]

  return (
    <div className="projects">
      <h2>Small projects i've been working on lately</h2>
      <div className="prjs">
        {prjs.map((p) => (
          <div key={p.title} className="prj">
            <div className="wrapper">
              <a href={p.website} target="_blank" rel="noreferrer">
                <img src={p.img} alt="Avatar"></img>
              </a>
            </div>
            <b>{p.title}</b>
            <p>{p.desc}</p>
            <a
              className="github-icon"
              href={"https://github.com/maathi/" + p.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
