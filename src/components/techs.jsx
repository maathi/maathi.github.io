import "../style/techs.css"
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa"
import { SiPostgresql, SiGraphql, SiHtml5, SiCss3 } from "react-icons/si"
function Techs() {
  return (
    <section id="techs">
      <h2>Skills & Tools</h2>
      <div className="logos">
        <div>
          <SiPostgresql />
          <p>Postgresql</p>
        </div>

        <div>
          <FaNodeJs />
          <p>Node Js</p>
        </div>
        <div>
          <SiGraphql />
          <p>GraphQl</p>
        </div>
        <div>
          <FaReact />
          <p>React Js</p>
        </div>
        <div>
          <SiHtml5 />
          <p>HTML 5</p>
        </div>
        <div>
          <SiCss3 />
          <p>CSS 3</p>
        </div>
      </div>
    </section>
  )
}

export default Techs
