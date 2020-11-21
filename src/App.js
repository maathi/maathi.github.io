import "./App.css"
import pic from "./mathi.jpg"
import react from "./react.png"
import node from "./node.png"
import graphql from "./graphql.png"
import express from "./express.png"
import mongo from "./mongodb.png"
import brba from "./brba.jpg"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <div className="main-content">
        <div className="intro">
          <img src={pic}></img>

          <h4>
            Hey, I'm mathi 🤗, a software developer.
            <br></br>I have a tremendous passion for solving real world problems
            through technology. I find great joy in creating software that has
            the potential to make people's lives somehow easier.
          </h4>
        </div>

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

        <div className="projects">
          <h2>💻 Small projects i have been working on lately</h2>
          <div className="prjs">
            <div className="prj">
              <div className="card">
                <img src={brba} alt="Avatar"></img>
              </div>
              <b>brba cast</b>
            </div>
            <div className="prj">
              <div className="card">
                <img src={brba} alt="Avatar"></img>
              </div>
              <b>brba cast</b>
            </div>
            <div className="prj">
              <div className="card">
                <img src={brba} alt="Avatar"></img>
              </div>
              <b>brba cast</b>
              <a>
                <p className="octocat">🐙🐱</p>
              </a>
            </div>
          </div>
        </div>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
