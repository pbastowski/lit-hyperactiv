// Stateful presentational component pattern.
//
// This component is a plain JS function with local state,
// which is created by simply calling the function and optionally
// passing it some parameters.

import { html, json } from '/src/libs.js'
import { createRoutes } from '/src/createRoutes.js'
import bind from '/src/bind.js'
import Header from './Header.js'

import store from '/src/store.js'

import One from './One.js'
import Two from './two/Two.js'

const routes = [
    ['#/'], // An empty view

    // A component specified directly
    ['#/one/:arc', One],

    // lazy load a component
    ['#/two/:id', Two]
    // ['#/two/:id', params => (console.log('>> TWO route'), import('./two/Two.js'))]
]

// Add three routes
const outlet = createRoutes(routes)

const App = () => html`
    ${Header()}

    <div style="background: #eee; padding: 4px 10px;">
        url: ${store.route && store.route.hash}
    </div>

    <h2>
        lit-html example without bundling <br />
        <small>with reactive state and double nested routing</small>
    </h2>

    <div style="background: #eee; padding: 4px 10px;">
        <a href="#/">Home</a>
        <a href="#/one/72">One</a>
        <a href="#/two/57">Two</a>
    </div>
    <br />

    <pre>${json(store.state)}</pre>
    Type something <input .value=${bind(store.state, 'abc')} />
    and watch the variable above update.

    <hr />
    ${outlet && outlet.view(1235)}
`
// ${outlet.view && outlet.view(1235)}
// <pre>reload: ${store.state.reload}</pre>

export default App
