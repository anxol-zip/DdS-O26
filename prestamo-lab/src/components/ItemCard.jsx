// Tarjeta de un equipo. No tiene estado propio: recibe el item para mostrarlo,
// si ya fue pedido (requested) y la función onAdd para avisarle a App.
function ItemCard({ item, requested, onAdd }) {
  // Desestructuración: saca las propiedades del objeto item en variables sueltas
  const { id, name, category, quantity, available } = item

  return (
    <article className="card">
      <h3>{name}</h3>
      <p>
        {id} - {category}
      </p>
      <p> Cantidad: {quantity} </p>
      <p>{available ? 'Disponible' : 'Prestado'}</p>
      <button
        type="button"
        disabled={!available || requested}
        onClick={() => onAdd(id)} // Al hacer click en el botón, se llama a la función onAdd con el id del item como argumento
      >
        {requested ? 'Agregado' : available ? 'Solicitar' : 'No Disponible'}
      </button>
    </article>
  )
}

export default ItemCard
