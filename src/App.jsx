import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './components/data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 0
    }
    if (count > 8) {
      amount = 9
    }
    setText(data.slice(0, amount))
  }


  return (
    <>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amout">
            Paragraphs:
          </label>
          <input type="number" name='amout' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
          <button type='submit' className='btn'>Generate</button>
        </form>
        <article className='lorem-text'>
          {text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default App
