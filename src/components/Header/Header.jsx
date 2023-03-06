import "./header.css"
import Logo from '../../assets/LogoMakr-1vTOgO.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left" id="inicio">
        <img src={Logo}/>
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
