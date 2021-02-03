import pic from "../img/mathi.jpg"
import "../style/intro.css"
import { FaTwitter, FaGithubAlt, FaYoutube } from "react-icons/fa"
import { MdMail } from "react-icons/md"

function Intro() {
  return (
    <section id="intro">
      <div>
        <div id="card">
          <img src={pic}></img>
          <p>zoomer | full stack developper | future ninja</p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/kitsutsukix"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maathi"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a
                href="mailto:mahdi221b@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="mail"
              >
                <MdMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
                className="youtube"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>
          Hey <span id="wave">👋</span>, I'm mathi, a software developer.
        </h1>
        <p>
          I have a tremendous passion for solving real world problems through
          technology. I find great joy in creating software that has the
          potential to make people's lives somehow easier.
        </p>
      </div>
    </section>
  )
}

export default Intro
