import { html, observe, json } from '/src/libs.js'

// This state is private to this module and will be lost
// if index.html is reloaded. Until it is reloaded, however,
// this state will persist.

const state = observe({ a: 111 })

export default () => html`
    <h4>Two - AAA</h4>
    <pre>${json(state)}</pre>
    <button @click=${() => state.a--}>-1</button>
    <button @click=${() => state.a++}>+1</button>
`

// export default component
