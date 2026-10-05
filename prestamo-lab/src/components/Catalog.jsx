import { useState } from 'react'
import ItemCard from './ItemCard'

function Catalog({ items, request, onAdd }) {
  // Estados propios del catálogo: el filtro de disponibles y el texto de búsqueda
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [search, setSearch] = useState('')

  // Equipos que se muestran: primero se filtra por disponibilidad y luego por nombre.
  // toLowerCase() en ambos lados hace que la búsqueda no distinga mayúsculas.
  const visible = items
    .filter((item) => !onlyAvailable || item.available)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  // Cuenta cuántos equipos están disponibles. reduce va sumando 1 por cada
  // equipo disponible, empezando desde 0. No se guarda en un estado porque se
  // puede calcular a partir de items.
  const totalAvailable = items.reduce(
    (sum, item) => (item.available ? sum + 1 : sum),
    0
  )

  console.log('render Catalog')

  return (
    <section>
      <h2> Catálogo </h2>
      <p>
        {totalAvailable} de {items.length} equipos disponibles.
      </p>

      {/* Inputs controlados: su valor viene del estado (value / checked) y cada
      cambio lo actualiza con onChange, así React siempre sabe qué hay escrito */}
      <label>
        Buscar equipo:
        <input value={search} onChange={(ev) => setSearch(ev.target.value)} />
      </label>

      <label>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(ev) => setOnlyAvailable(ev.target.checked)}
        />
        Solo disponibles
      </label>

      {/* # Las llaves indican un bloque de código en JSX, y dentro de ellas se
      puede escribir cualquier expresión de JavaScript. */}

      {visible.length === 0 ? (
        <p>No hay equipos que coincidan con la búsqueda.</p>
      ) : (
        <div className="list">
          {/* Mapa de los elementos visibles, renderizando un ItemCard para cada uno */}
          {visible.map((item) => (
            // ItemCard incluye las props item, requested y onAdd. requested es true si el id del item está en la solicitud.
            // onAdd es la función que se llama cuando se hace click en el botón de solicitar.
            // key identifica de forma única cada elemento de la lista y ayuda a React a saber cuál cambió o se quitó
            <ItemCard
              key={item.id}
              item={item}
              requested={request.includes(item.id)}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Catalog
