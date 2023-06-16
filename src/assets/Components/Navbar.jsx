import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../utils/routes"


const Navbar = () => {

  const navigate = useNavigate()

  // ej de uso navigate, además de ir para atrás o adelante
  // const funcion = () => {
  //   console.log('Enviado');
  //   navigate('/')
  // }

  return (
    <div className='navbar'>
        <div className='links'>
          <h4 onClick={() => navigate(-1)}>⬅Back</h4>
          <Link to={routes.home}><h4 className='link'>Home</h4></Link>
          <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
          <Link to={routes.about}><h4 className='link'>About</h4></Link>
          <Link to={routes.character}><h4 className='link'>Personajes</h4></Link>
          <Link to={routes.singleCharacter}><h4 className="link"></h4></Link>
          {/* <button onClick={funcion}>Envar</button> */}
        </div>
        <input className='search' type="text" />
    </div>
  )
}

export default Navbar