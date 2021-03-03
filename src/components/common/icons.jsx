import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiPostgresql,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiJsonwebtokens,
  SiMongodb,
  SiRedux,
  SiSass,
  SiFirebase,
  SiDocker,
} from "react-icons/si"
import { AiFillApi } from "react-icons/ai"
function Postgres() {
  return <SiPostgresql style={{ color: "#0064a5" }} title="Postgresql" />
}

function Node() {
  return <FaNodeJs style={{ color: "#3c873a" }} title="Node Js" />
}

function Graphql() {
  return <SiGraphql style={{ color: "#e535ab" }} title="GraphQl" />
}

function ReactIcon() {
  return <FaReact style={{ color: "#61dbfb" }} title="React" />
}

function Html() {
  return <SiHtml5 style={{ color: "#e34c26" }} title="HTML 5" />
}

function Css() {
  return <SiCss3 style={{ color: "#264de4" }} title="CSS 3" />
}

function Api() {
  return <AiFillApi style={{ color: "#1aff00" }} title="api" />
}

function Jwt() {
  return <SiJsonwebtokens style={{ color: "#dddddd" }} title="jwt" />
}

function Mongodb() {
  return <SiMongodb style={{ color: "#4DB33D" }} title="MongoDB" />
}

function Redux() {
  return <SiRedux style={{ color: "#764abc" }} title="Redux" />
}

function Sass() {
  return <SiSass style={{ color: "#CD6799" }} title="Sass" />
}

function Firebase() {
  return <SiFirebase style={{ color: "#FFA611" }} title="Firebase" />
}

function Docker() {
  return <SiDocker style={{ color: "#0db7ed" }} title="Docker" />
}
function Express() {
  return (
    <span
      style={{
        lineHeight: "16px",
        fontWeight: "100",
        fontSize: "22px",
        cursor: "default",
      }}
      title="Express"
    >
      ex
    </span>
  )
}

function ExpressLg() {
  return (
    <span
      style={{
        display: "block",
        fontWeight: "100",
        cursor: "default",
        color: "grey",
        lineHeight: 1,
      }}
      title="Express"
    >
      ex
    </span>
  )
}
export {
  Postgres,
  Node,
  Graphql,
  ReactIcon,
  Html,
  Css,
  Api,
  Jwt,
  Mongodb,
  Redux,
  Express,
  ExpressLg,
  Sass,
  Firebase,
  Docker,
}
