import './style.css'
import { debounce } from 'lodash-es'

console.dir(debounce);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
