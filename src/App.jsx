import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='trabajos' element={ <Work /> }/>

        <Route path='/*' element={ <Home /> }/>
      </Routes>
    </>
  )
}