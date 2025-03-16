import { Computer } from "../components/home/computer/Computer"
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
      <Computer />
    </>
  )
}
