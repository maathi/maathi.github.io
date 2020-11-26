import "../style/footer.css"
import { FaTwitter, FaGithubAlt, FaYoutube } from "react-icons/fa"
import { MdMail } from "react-icons/md"

function Footer() {
  return (
    <div className="footer">
      <p className="rights">
        © All rights reserved. | Designed &amp; developed by <span>mathi</span>
      </p>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/kitsutsukix"
            target="_blank"
            className="twitter"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/maathi"
            target="_blank"
            className="github"
          >
            <FaGithubAlt />
          </a>
        </li>
        <li>
          <a href="mailto:mahdi221b@gmail.com" target="_blank" className="mail">
            <MdMail />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
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
