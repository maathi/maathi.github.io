import "./App.css"
import Intro from "./components/intro"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Projects from "./components/projects"
import Techs from "./components/techs"
import Quote from "./components/quote"

function App() {
  return (
    // <div>
    //   <Quote></Quote>
    //   <div className="main-content">
    //     <Intro></Intro>
    //     <Techs></Techs>
    //     <Projects></Projects>
    //     <Contact></Contact>
    //   </div>
    //   <Footer></Footer>
    // </div>
    <h1 style={{ textAlign: "center", margin: "4rem auto" }}>
      I have moved my portfolio to :
      <a href="https://mathiland.vercel.app"> https://mathiland.vercel.app</a>
      <br></br>I rebuilt it using Next.js and added a blog section :D
    </h1>
  )
}

export default App
