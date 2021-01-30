import "../style/footer.css"
import { FaTwitter, FaGithubAlt, FaYoutube } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { GiHeartOrgan } from "react-icons/gi"

function Footer() {
  return (
    <div className="footer">
      <p className="rights">
        © All rights reserved. | Designed &amp; developed with
        <GiHeartOrgan id="heart" />
        by &nbsp;
        <span>mathi</span>
      </p>
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
  )
}

export default Footer
