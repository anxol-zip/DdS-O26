import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Catalog from './components/Catalog'

function App() {
  const total = 5
  const [available, setAvailable] = useState(total)

  {/* 
  function borrowM() {
    setAvailable((d) => (d > 0 ? d-1 : d))
  }

  function returnM() {
    setAvailable((d) => (d < total ? d + 1 : d))
  }
  */}

  const [count, setCount] = useState(67)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mi app número 5 (creo) con react y vite 😎</h1>
          <p>
            Autor: Angel Rugerio
          </p>
          <h2> Contador: {count}</h2>
        </div>
        <div classname="button-row">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Sum 1 to count
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count - 1)}
          >
            Rest 1 to count
          </button>
        </div>

        <main>
          <h2> Disponibles: {available} </h2>
          <h2> Respberry Pi 5</h2>
          <p> {available} de {total} disponibles. </p>
          {/* 
          <div classname="button-row">
            <button type="button" className="button" onClick={borrowM} disabled={available === 0}>
              Prestar
            </button>
            <button type="button" className="button" onClick={returnM} disabled={available === total}>
              Devolver
            </button>
          </div> 
          */}
          <h1> Laboratorio - prestamos </h1>
          <Catalog gears = {gears} />
        </main>
      </section>
    </>
  )
}

export default App
