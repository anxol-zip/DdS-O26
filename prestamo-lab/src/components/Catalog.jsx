import { use, useState } from 'react'
import GearCard from './GearCard'

function Catalog( { gears } ){
    const [onlyAvailable, setOnlyAvailable] = useState(false)
    const [search, setSearch] = useState('')

    const visible = gears
        .filter((g) => !onlyAvailable || g.available)
        .filter((g) => g.name.toLowercase().includes(search.toLowerCase()))

    const totalAvailable = gears.reduce((sum, g) => (g.available ? sum + 1 : sum), 0)

    return (
        <section>
            <h2> Catálogo </h2>
            <p>{totalAvailable} de {gears.lenght} equipos disponibles.</p>

            {/* TODO: continuaremos con el buscador y las tarjetas */}
        </section>
    )
}

export default Catalog