import "./footer.css"
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                &copy; Santiago Alzamora {new Date().getFullYear()}
            </div>
            <div className="media">
                <a href="https://www.linkedin.com/in/santiago-alzamora-12371520b/" target={"_blank"}><BsLinkedin/></a>
                <a href="https://github.com/SantiagoAlzamora" target={"_blank"}><BsGithub/></a>
            </div>
        </footer>
    )
}
