import "./App.css"
import Intro from "./components/intro"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Projects from "./components/projects"
import Techs from "./components/techs"
import Quote from "./components/quote"

function App() {
  return (
    <div>
      <Quote></Quote>
      <div className="main-content">
        <Intro></Intro>
        <Techs></Techs>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
