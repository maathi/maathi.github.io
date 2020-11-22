import "./App.css"
import pic from "./mathi.jpg"
import react from "./react.png"
import node from "./node.png"
import graphql from "./graphql.png"
import express from "./express.png"
import mongo from "./mongodb.png"

import Intro from "./components/intro"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Projects from "./components/projects"

function App() {
  return (
    <div>
      <div className="main-content">
        <Intro></Intro>
        <div className="techs">
          <h2>🚀 Some of my go-to technologies</h2>
          <div className="logos">
            <img src={react} alt="React"></img>
            <img src={node}></img>
            <img src={graphql}></img>
            <img src={express}></img>
            <img src={mongo}></img>
          </div>
        </div>

        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
