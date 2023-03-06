// import { useState } from "react"
import Project from "./ProjectItem"
// import ProjectModal from "./ProjectModal"
import "./projects.css"

const projects = [
    {
        id:1,
        image:"src/assets/work4.jpg",
        title:"React chat",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"MERN",
        github:"https://github.com/SantiagoAlzamora/react-chat-api"
    },
    {
        id:2,
        image:"src/assets/Quinto.jpg",
        title:"Challenge Quinto Impacto",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"Java - MySQL - React",
        github:"https://github.com/SantiagoAlzamora/Challenge-Quinto-Impacto",
    },
    {
        id:3,
        image:"src/assets/Chatroom.jpg",
        title:"Chatroom",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"Node - Express - React",
        github:"https://github.com/SantiagoAlzamora/chatroom-front"

    },
    {
        id:4,
        image:"src/assets/work1.jpg",
        title:"React Cart",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vel.",
        stack:"React",
        github:"https://github.com/SantiagoAlzamora/react-cart"
    },
    {
        id:4,
        image:"src/assets/Todo.jpg",
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
