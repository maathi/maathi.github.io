import "../style/projects.css"
import brba from "../brba.jpg"

function Projects() {
  return (
    <div className="projects">
      <h2>💻 Small projects i have been working on lately</h2>
      <div className="prjs">
        <div className="prj">
          <div className="card">
            <img src={brba} alt="Avatar"></img>
          </div>
          <b>brba cast</b>
        </div>
        <div className="prj">
          <div className="card">
            <img src={brba} alt="Avatar"></img>
          </div>
          <b>brba cast</b>
        </div>
        <div className="prj">
          <div className="card">
            <img src={brba} alt="Avatar"></img>
          </div>
          <b>brba cast</b>
          <a>
            <p className="octocat">🐙🐱</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
