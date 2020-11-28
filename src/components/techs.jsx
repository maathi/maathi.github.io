import "../style/techs.css"
import react from "../img/react.png"
import node from "../img/node.png"
import graphql from "../img/graphql.png"
import express from "../img/express.png"
import mongo from "../img/mongodb.png"

function Techs() {
  return (
    <div className="techs">
      <h2>Some of my go-to technologies</h2>
      <div className="logos">
        <img src={react} alt="React"></img>
        <img src={node} alt="node"></img>
        <img src={graphql} alt="graphql"></img>
        <img src={express} alt="express"></img>
        <img src={mongo} alt="mongodb"></img>
      </div>
    </div>
  )
}

export default Techs
