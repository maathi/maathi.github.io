import pic from "../img/mathi.jpg"
import "../style/intro.css"

function Intro() {
  return (
    <div className="intro">
      <img src={pic}></img>

      <p>
        Hey, I'm mathi 🤗, a software developer.
        <br></br>I have a tremendous passion for solving real world problems
        through technology. I find great joy in creating software that has the
        potential to make people's lives somehow easier.
      </p>
    </div>
  )
}

export default Intro
