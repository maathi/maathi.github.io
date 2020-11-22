import "../style/projects.css"
import brba from "../brba.jpg"
import { FaGithub } from "react-icons/fa"

function Projects() {
  let prjs = [
    {
      title: "BrBa cast",
      img: brba,
      website: "",
      github: "brba",
    },
    {
      title: "BrBa cast",
      img: brba,
      website: "",
      github: "",
    },
    {
      title: "BrBa cast",
      img: brba,
      website: "",
      github: "",
    },
    {
      title: "BrBa cast",
      img: brba,
      website: "",
      github: "",
    },
  ]

  return (
    <div className="projects">
      <h2>💻 Small projects i have been working on lately</h2>
      <div className="prjs">
        {prjs.map((p) => (
          <div className="prj">
            <div className="wrapper">
              <img src={p.img} alt="Avatar"></img>
            </div>
            <b>{p.title}</b>
            <a>
              <a
                className="github-icon"
                href={"https://github.com/maathi/" + p.github}
              >
                <FaGithub />
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
