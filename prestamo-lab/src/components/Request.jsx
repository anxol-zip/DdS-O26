// Lista de la solicitud. No guarda los equipos, solo recibe los id's (request)
// y busca su información en items para mostrar el nombre.
function Request({ request, items, onRemove }) {
  // Recordemos que request es un array de los id's añadidos a la solicitud
  return (
    <section>
      <h2>Solicitud: ({request.length}) equipos</h2>

      {request.length === 0 ? (
        <p>Todavía no agregas equipos</p>
      ) : (
        <ul>
          {/* Mapeamos los id's de la solicitud para mostrar el nombre del equipo
          y un botón para quitarlo */}
          {request.map((id) => {
            // Buscamos el item correspondiente al id en el array de items
            const item = items.find((it) => it.id === id)
            return (
              // Renderizamos un p con el nombre del item y un botón para quitarlo de la solicitud
              <p className="list" key={id}>
                {item.name}{' '}
                <button type="button" onClick={() => onRemove(id)}>
                  Quitar
                </button>
              </p>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default Request
