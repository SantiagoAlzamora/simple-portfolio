// import { useState } from "react"
import Project from "./ProjectItem"
// import ProjectModal from "./ProjectModal"
import "./projects.css"
import Imagen1 from '../../assets/work4.jpg'
import Imagen2 from '../../assets/Quinto.jpg'
import Imagen3 from '../../assets/Chatroom.jpg'
import Imagen4 from '../../assets/work1.jpg'
import Imagen5 from '../../assets/Todo.jpg'

const projects = [
    {
        id:1,
        image:Imagen1,
        title:"React chat",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"MERN",
        github:"https://github.com/SantiagoAlzamora/react-chat-api"
    },
    {
        id:2,
        image:Imagen2,
        title:"Challenge Quinto Impacto",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"Java - MySQL - React",
        github:"https://github.com/SantiagoAlzamora/Challenge-Quinto-Impacto",
    },
    {
        id:3,
        image:Imagen3,
        title:"Chatroom",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"Node - Express - React",
        github:"https://github.com/SantiagoAlzamora/chatroom-front"

    },
    {
        id:4,
        image:Imagen4,
        title:"React Cart",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"React",
        github:"https://github.com/SantiagoAlzamora/react-cart"
    },
    {
        id:4,
        image:Imagen5,
        title:"TodoList",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"React Native",
        github:"https://github.com/SantiagoAlzamora/todoList-React-Native"
    },

]

export default function Projects() {

    // const [showModal, setShowModal] = useState(false)
    // const [projectToShow,setProjectToShow] = useState({})

    // function toogleModal(){
    //     setShowModal(!showModal)
    // }

    // function selectProjectToShow(project){
    //     setProjectToShow(project)
    // }


    return (
        <section className='projects' id="projects">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map(e=> <Project key={e.id} project={e}/>)}
            </div>
            {/* {showModal && <ProjectModal project={projectToShow} />} */}
        </section>
    )
}
