// Reusable Stateful Component pattern
//
// A reusable stateful component is a JavaScript function object,
// a class with local state, which returns html.
//
// This component is created like any JS class, by using the
// "new" keyword.
// example: new MyComponent(args)

import { html, observe, json } from '/src/libs.js'

// export default class {
//     constructor(v = 'Class Stateful Component') {
//         this.state = observe({ a: v })

//         return () => html`
//             <h4>Two - BBB</h4>
//             <pre>${json(this.state)}</pre>
//         `
//     }
// }

export default function(v = 'Stateful Component') {
    // State persists only while the object returned from this function
    // is in scope. This is how you create reusable components.
    // The function returned must be called twice, for example:
    // import B from './b.js'
    // html` ${ B()() }`

    const state = (this.state = observe({ a: v }))

    return () => html`
        <h4>Two - BBB</h4>
        <pre>${json(state)}</pre>
    `
}
