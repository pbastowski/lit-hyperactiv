import { html, observe, json } from '/src/libs.js'
// import store from '/src/store.js'

export default function(v) {
    // State persists only while the object returned from this function
    // is in scope. This is how you create reusable components.
    // The function returned must be called twice, for example:
    // import B from './b.js'
    // html` ${ B()() }`
    const state = observe({ a: v })
    console.log('C ' + v + ': constructed ---')
    // store.state.reload = 1

    return (props, params) => html`
        <h4>Two - ${v.toUpperCase()}</h4>
        <pre>${json(state)}</pre>
        <button @click=${() => (state.a += ' +72')}>
            Add 72
        </button>
    `
}
