import React from 'react'
import {ImGithub} from 'react-icons/im'
export default function Project({project, toogleModal, selectProjectToShow}) {

    return (
        <article className='project'>
            <div className='project-image'>
                <img src={project.image} alt="" />
            </div>
            <div className='project-info'>
                <h4>{project.title}</h4>
                <p className='project-stack'>{project.stack}</p>
                <a href={project.github}><ImGithub /> View code</a>
            </div>
        </article>
    )
}
