import './Navbar.css'
import logo from '../assets/logo.png'
import github from '../assets/github.png'
import { useState } from 'react'

export const Navbar = () => {

  const [active, setActive] = useState("nav-list");
  const [icon, setIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "nav-list") {
      setActive("nav-list nav-active");
    } else setActive("nav-list");

    // Icon Toggler
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  return (
    <nav>
      <div className='logo-container'>
        <img src={logo} alt="" />
        <h1>Marcelo Anavia</h1>
      </div>
      <ul className={active}>
        <li>Trabajos</li>
        <li>Portfolio</li>
        <li>Cv</li>
        <div className='github-container'>
          <img src={github} alt="" />
          <li>Github</li>
        </div>
      </ul>
      <div onClick={ navToggle } className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}
