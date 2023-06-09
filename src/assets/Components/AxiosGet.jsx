import axios from 'axios'
import { useEffect, useState } from 'react'

const AxiosGet = () => {
    const [gatito, setGatito] = useState([])
    const [counter, setCounter] = useState(0)
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url).then((rta) => setGatito(rta.data))
    }, [counter])

    //console.log(gatito[0].url);
  return (
    <div>
        {/* el signo ? significa optional, es para que no tome undefined y al actualizar siga cargando otro img random */}
        <img style={{objectFit: 'cover', width: '400px', height: '400px'}} src={gatito[0]?.url} alt="" />
        <button
            onClick={() => setCounter(counter + 1)}
        >Cambiar gatito</button>
        <h4>Cantidad de veces que se cambió el gatito: {counter}</h4>
    </div>
  )
}

export default AxiosGet