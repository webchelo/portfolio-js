import { NavLink } from "react-router-dom"
import { DinosaurModel } from "../components/home/DinosaurModel"
import { HelloCard } from "../components/home/HelloCard"
import { Info } from "../components/home/Info"
import { PresentationCard } from "../components/home/PresentationCard"
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className="hero">
        <DinosaurModel />
        <HelloCard />
        <PresentationCard />
        <Info />
      </div>
      <NavLink to='easter-egg'><div
        className="dino-egg"
      ></div></NavLink>
    </>
  )
}
