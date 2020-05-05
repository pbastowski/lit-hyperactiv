import { html, json } from '/src/libs.js'

export default (props, params) => html`
    <h1>This is ONE</h1>
    <pre>params: ${json(params)}</pre>
`

// export default class {
//     constructor() {
//         return (props, params) => html`
//             <h1>This is ONE</h1>
//             <pre>params: ${json(params)}</pre>
//         `
//     }
// }
