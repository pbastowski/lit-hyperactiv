import { computed, observe, html, json } from '/src/libs.js'
import { createRoutes } from '/src/createRoutes.js'

import store from '/src/store.js'
import A from './A.js'
import B from './B.js'
import C from './C.js'

console.log('@@@@ B:', typeof B, 'this' in B)

const B1 = new B()
const C1 = new C('c1')
// const C2 = new C('New each time')

// let counter = 0
export default function() {
    // export default class {
    // constructor() {
    // store.state.reload = 0

    const outlet = createRoutes(
        [
            ['#/two/:id/a', A],
            ['#/two/:id/b', () => B1()],
            ['#/two/:id/c1', C1],
            ['#/two/:id/c2', () => new C('New Each Time')()],
            ['#/two/:id/*', undefined]
        ]
        // store.two_outlet
    )

    console.log('TWO consturucted ---')

    return (props, params) => {
        console.log('TWO: NEW INSTANCE ---')

        return html`
            <h3>Two Home</h3>
            <pre>params: ${json(params)}</pre>
            <div style="background: #eee; padding: 4px 10px;">
                <a href="#/two/${params.id}">&lt;</a>
                <a href="#/two/${params.id}/a">AAA</a>
                <a href="#/two/${params.id}/b">BBB</a>
                <a href="#/two/${params.id}/c1">C-1</a>
                <a href="#/two/${params.id}/c2">C-2</a>
            </div>

            ${outlet.view()}
        `
    }
}
// }
console.log('Two.js LOADED')
// <pre>${outlet.view.toString()}</pre>
// ${store.state.two_outlet.view()}

// TO DO: think about how lit-html can't distinguish betwen c1 and c2
// <pre>props: ${console.log('!!! TWO render')}</pre>
// <pre>params: ${json({ ...params, counter: counter++ })}</pre>
