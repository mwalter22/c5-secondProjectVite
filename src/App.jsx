import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Components/Navbar'
import RickAndMorty from './assets/Components/RickAndMorty'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import Character from './Pages/Character'


function App() {

  return (
    <>       
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact}  element={<Contact/>}/>
        <Route path={routes.about}  element={<About/>}/>
        <Route path={routes.character} element= {<RickAndMorty/>}/>
        <Route path={routes.singleCharacter} element= {<Character/>}/>
        {/* <Route path='/personaje/:id' element= {<Character/>}/> idem línea 23 */}
        <Route path={routes.pageNotFound}  element={<PageNotFound/>}/>
      </Routes>
    </>
  )

}

export default App
