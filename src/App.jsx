import { DinosaurModel } from './components/DinosaurModel'
import { HelloCard } from './components/HelloCard'
import { Navbar } from './components/Navbar'
import { PresentationCard } from './components/PresentationCard'

export const App = () => {
  return (
    <>
      <Navbar/>
      <DinosaurModel />
      <HelloCard />
      <PresentationCard />
    </>
  )
}