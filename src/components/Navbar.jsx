import './Navbar.css'
import logo from '../assets/logo.png'
import github from '../assets/github.png'

export const Navbar = () => {
  return (
    <ul className='nav-list'>
        <div className='logo-container'>
          <img src={logo} alt="" />
          <h1>Marcelo Anavia</h1>
        </div>
        <li>Trabajos</li>
        <li>Portfolio</li>
        <li>Cv</li>
        <div className='github-container'>
          <img src={github} alt="" />
          <li>Github</li>
        </div>
    </ul>
  )
}
