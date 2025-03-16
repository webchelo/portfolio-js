import { NavLink } from 'react-router-dom'
import Spiral from '../../assets/bitmap.svg'
import React from '../../assets/React-icon.svg'
import Redux from '../../assets/redux.svg'
import Docker from '../../assets/docker-mark-blue.svg'
import Git from '../../assets/Git-logo.svg'
import Jest from '../../assets/jest.png'
import Next from '../../assets/nextjs.svg'
import Node from '../../assets/Node.js_logo.svg'
import Tailwind from '../../assets/Tailwind_CSS_Logo.svg'
import Tanstack from '../../assets/tanstack.png'
import Ts from '../../assets/Typescript_logo_2020.svg'
import Zustand from '../../assets/zustand.svg'
import './Info.css'

export const Info = () => {
  return (
    <>
    <div className="info-container">
      <h2 className="info-title">Bio</h2>
      <div className="info-text">
        <span className="info-indent"></span>
        Encuentro apasionante aprender y trabajar con tecnologías nuevas. Paso mi tiempo libre programando y diseñando proyectos interesantes y divertidos. En el proceso siempre aprendo y re-aprendo algo. Me gusta compartir ideas y descubrir nuevas formas de resolver problemas.
      </div>
      <button className="info-button"><NavLink to={'/'}>Mi Portfolio</NavLink></button>
      
    </div>
    <div className='info-container'>
      <h2 className="info-title">Skills</h2>
      <img src={Spiral} alt="Spiral Icon" className="info-spiral" />
      <div className="logos-container">
        <img src={React} alt="React Icon" className="logo" />
        <img src={Redux} alt="Redux Icon" className="logo" />
        <img src={Docker} alt="Docker Icon" className="logo" />
        <img src={Git} alt="Git Icon" className="logo" />
        <img src={Jest} alt="Jest Icon" className="logo" />
        <img src={Next} alt="Next Icon" className="logo" />
        <img src={Node} alt="Node Icon" className="logo" />
        <img src={Tailwind} alt="Tailwind Icon" className="logo" />
        <img src={Tanstack} alt="Tanstack Icon" className="logo" />
        <img src={Ts} alt="Ts Icon" className="logo" />
        <img src={Zustand} alt="Zustand Icon" className="logo" />
        <img src={Redux} alt="Redux Icon" className="logo" />
        
      </div>
    </div>
    </>
    
  )
}
