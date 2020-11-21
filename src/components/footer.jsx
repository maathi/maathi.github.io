import "../style/footer.css"
import { FaTwitter, FaGithubAlt } from "react-icons/fa"
import { MdMail } from "react-icons/md"

function Footer() {
  return (
    <div className="footer">
      <p className="rights">
        © All rights reserved. | Designed &amp; developed by <span>mathi</span>
      </p>
      <ul className="icons">
        <li>
          <a href="https://twitter.com/kefimochi" className="twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/Kefimochi" className="github">
            <FaGithubAlt />
          </a>
        </li>
        <li>
          <a href="mailto:kate.efimova0@gmail.com" className="mail">
            <MdMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
