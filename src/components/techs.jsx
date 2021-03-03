import "../style/techs.css"
import {
  Postgres,
  Mongodb,
  Firebase,
  Node,
  Graphql,
  ExpressLg,
  ReactIcon,
  Redux,
  Html,
  Css,
  Sass,
  Docker,
} from "./common/icons"
function Techs() {
  return (
    <section id="techs">
      <h2>Skills & Tools</h2>
      <div className="logos">
        <div>
          <Postgres />
          <p>Postgresql</p>
        </div>
        <div>
          <Mongodb />
          <p>MongoDB</p>
        </div>
        <div>
          <Firebase />
          <p>Firebase</p>
        </div>
        <div>
          <Node />
          <p>Node Js</p>
        </div>
        <div>
          <Graphql />
          <p>GraphQl</p>
        </div>
        <div>
          <ExpressLg />
          <p>Express</p>
        </div>
        <div>
          <ReactIcon />
          <p>React Js</p>
        </div>
        <div>
          <Redux />
          <p>Redux</p>
        </div>
        <div>
          <Html />
          <p>HTML 5</p>
        </div>
        <div>
          <Css />
          <p>CSS 3</p>
        </div>
        <div>
          <Sass />
          <p>Sass</p>
        </div>
        <div>
          <Docker />
          <p>Docker</p>
        </div>
      </div>
    </section>
  )
}

export default Techs
