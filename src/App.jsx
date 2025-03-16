import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/global/Navbar'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { EasterEgg } from './pages/EasterEgg'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='trabajos' element={ <Work /> }/>
        <Route path="/easter-egg" element={<EasterEgg />} />
        <Route path='/*' element={ <Home /> }/>
      </Routes>
    </>
  )
}