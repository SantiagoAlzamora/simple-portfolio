import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-left" id="inicio">
        <img src="src/assets/LogoMakr-1vTOgO.png"/>
      </div>
      <div className="header-right">
        <a href="/#about" className="header-link">About me</a>
        <a href="/#projects" className="header-link">Projects</a>
        <a href="/#contact" className="header-link">Contact me</a>
        <a href="/src/assets/Santiago-Alzamora-CV-EN.pdf" target={"_blank"} className="resume">Resume</a>
      </div>
    </header>
  )
}
