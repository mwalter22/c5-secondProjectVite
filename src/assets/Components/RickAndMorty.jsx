import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RickAndMorty = () => {
  const [personajes, setPersonajes] = useState([])
    const url = 'https://rickandmortyapi.com/api/character'
    useEffect (() => {
        axios(url)
        .then(res => setPersonajes(res.data.results))
    }, [])
    console.log(personajes);
  return (
    <div>
      {personajes.map(personaje => (
        <div key={personaje.id}>
          <Link to={`/personaje/${personaje.id}`}><h3>{personaje.name}</h3></Link>
          <Link to={`/personaje/${personaje.id}`}><img src={personaje.image} alt="" /></Link>
        </div>
      ))}
    </div>
  )
}

export default RickAndMorty