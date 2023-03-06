import "./about.css"

export default function About() {
    return (
        <section className='about' id="about">
            <div className="title">
                <h1>Hello 👋</h1>
                <h3>I'm <span className="color-name">Santiago Alzamora</span></h3>
                <h4>Web developer fullstack</h4>
            </div>
            <div className="description">
                <p>
                    I'm passionate about the world of programming. Through my experience, I've learned that teamwork is essential for achieving significant accomplishments and generating positive impacts. As a professional, I value effective collaboration and believe that working as a team is key to success in this field.
                </p>
            </div>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/santiago-alzamora-12371520b/" target={"_blank"}>LinkedIn</a>
                <a href="https://github.com/SantiagoAlzamora" target={"_blank"}>Github</a>
            </div>

        </section>
    )
}
