function GearCard({team}){
    const { id, name, category, quantity, available } = team
    
    return (
        <article className = "card">
            <h3>{name}</h3>
            <p>{id} - {category}</p>
            <p>{available ? 'Disponible' : 'Prestado'}</p>
            <button type="button" disabled={!available}>
                {available ? 'Solicitar' : 'No Disponible'}
            </button>
        </article>
    )
}

export default GearCard