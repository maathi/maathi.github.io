import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiPostgresql,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiJsonwebtokens,
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
export { Postgres, Node, Graphql, ReactIcon, Html, Css, Api, Jwt }
