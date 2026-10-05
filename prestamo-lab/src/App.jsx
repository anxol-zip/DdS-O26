import { useState } from 'react'
import './App.css'
import Catalog from './components/Catalog'
import Request from './components/Request'
import { items } from './data/items'

function App() {
  // Estado de la solicitud: un array con los id's de los equipos elegidos.
  // Vive en App porque tanto Catalog (agrega) como Request (quita) lo necesitan.
  const [request, setRequest] = useState([])

  // Función para agregar un equipo a la solicitud
  function add(id) {
    // If anidado: si el id ya está en la solicitud, no hacer nada
    if (request.includes(id)) return

    // Agregar el id a la solicitud
    setRequest([...request, id])
    // Los 3 puntos (...) son el operador de propagación (spread operator) que permite crear un nuevo array con los elementos del array original
    // y el nuevo elemento agregado al final.
  }

  // Función para quitar un equipo de la solicitud
  function remove(id) {
    // Filtrar la solicitud para eliminar el id
    // La función flecha compara cada elemento que hay con el id a eliminar
    setRequest(request.filter((reqId) => reqId !== id))
  }

  return (
    <>
      <header>
        <h1> Laboratorio - prestamos </h1>
        <p> Autor: Angel Rugerio</p>
      </header>

      <main>
        {/* Renderizar los componentes Request y Catalog, pasando las props
        necesarias. onRemove y onAdd son funciones que se pasan como props para
        que los componentes hijos puedan llamar a estas funciones y modificar el
        estado del componente padre (App) */}
        <Request request={request} items={items} onRemove={remove} />
        <Catalog items={items} request={request} onAdd={add} />
      </main>
    </>
  )
}

export default App
