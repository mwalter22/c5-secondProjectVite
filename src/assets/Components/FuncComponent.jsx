import { useEffect, useState } from 'react'

const FuncComponent = () => {
  console.log('Fucion: Se ejecuta esta primera parte');
  const [user, setUser] = useState ({
    name: 'Pedro',
    age: 33
  })

//el array de dependencia está vacío, se ejecuta una sola vez al inicio
  useEffect(() => {
      console.log('Fucion: Se montó el componente');
      //lo del return equivale al WillUnmount en clase
      return () => {
        console.log('Fucion: Se desmontó el componente');
      }
  }, [])

//el array tiene una dependencia (user), se ejecuta cada vez que se modifique user
  useEffect(() => {
    console.log('Fucion: Se actualizó el estado user');
}, [user])

  return (
    <div>
      {console.log('Fucion: Se ejecutó el render')}
      <h1>Componente de función</h1>
      <h2>{user.name}</h2>
      <button
        onClick={() => setUser({...user, name: 'Pablo'})}
      >Cambiar el nombre</button>
    </div>
  )
}

export default FuncComponent