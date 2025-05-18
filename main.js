import './style.css'
import { setupCounter } from './widev.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="https://i.postimg.cc/bvWtMmR7/image.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Hola Wilder nuevo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Buenos dias amigo
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 