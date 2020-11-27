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
        <img src={node}></img>
        <img src={graphql}></img>
        <img src={express}></img>
        <img src={mongo}></img>
      </div>
    </div>
  )
}

export default Techs
